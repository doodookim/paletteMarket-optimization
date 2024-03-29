import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router';
import { supabase } from '../../api/supabase/supabaseClient';
import CommuFileList from '../../components/community/CommuFileList';
import Reply from '../../components/community/Reply';
import WriteLayout from '../../components/community/WriteLayout';
import QnAFrom from '../../components/mypage/Profile/QnAFrom';
import SkeletonCommunityDetail from '../../components/skeleton/SkeletonCommunityDetail';
import { setIsOpenForm } from '../../redux/modules/openForm';
import {
  useAppDispatch,
  useAppSelector
} from '../../redux/reduxHooks/reduxBase';
import * as St from '../../styles/community/CommunityDetailStyle';
import parseDate from '../../util/getDate';
import { fetchDetailPost } from './api/commuQuery';
import { ProfileObject } from './api/model';
import { useDeletePostMutation } from './hook/useQuery';
const CommuDetail: React.FC = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [isEditState, setIsEditState] = useState(false);
  const [userId, setUserId] = useState('');
  const [editToolOpen, setEditToolOpen] = useState(false);
  const [postUser, setPostUser] = useState<ProfileObject[]>([]);
  const { isOpen } = useAppSelector((state) => state.openForm);
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const {
    data: posts,
    isLoading,
    isError
  } = useQuery(['posts_detail', param.id], () => fetchDetailPost(param.id));
  useEffect(() => {
    // 로컬 스토리지에서 userId 가져오기
    const storedUserId = localStorage.getItem('userId');

    if (storedUserId) {
      // 로컬 스토리지에 userId가 있으면 상태 업데이트
      setUserId(storedUserId);
    }
  }, []);
  useEffect(() => {
    const getPostUser = async () => {
      // posts 데이터가 로드되었는지 확인
      if (!isLoading && posts && posts.length > 0) {
        try {
          const { data: post_user, error } = await supabase
            .from('user')
            .select('*')
            .eq('id', posts[0].post_user);

          if (error) {
            throw error;
          }

          if (post_user) {
            setPostUser(post_user);
          }
        } catch (error: any) {
          console.log(error.message);
        }
      }
    };

    getPostUser();
  }, [isLoading, posts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deleteMutation = useDeletePostMutation();

  const deletePostHandle = () => {
    deleteMutation.mutate(param.id, {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
        return navigate(-1);
      }
    });
    setEditToolOpen(!editToolOpen);
  };

  if (isLoading) {
    return <SkeletonCommunityDetail />;
  }

  if (isError) {
    return <div>Error loading posts</div>;
  }
  const handleOnClickBack = () => {
    const confirm = window.confirm(
      '수정한 글이 적용되지 않습니다. 그래도 페이지를 떠나시겠습니까?'
    );
    if (confirm) {
      navigate(-1);
    }
  };
  const handleOpenForm = () => {
    dispatch(setIsOpenForm());
    setEditToolOpen(!editToolOpen);
  };
  return (
    <St.Container>
      {isEditState ? (
        <St.WriteWrap>
          <St.TitleTopper>
            <St.BackBtnBox>
              <St.BackIcon onClick={handleOnClickBack} />
            </St.BackBtnBox>

            <h1>게시글 수정</h1>
            <p>*필수항목</p>
          </St.TitleTopper>

          <WriteLayout
            profile={undefined}
            isEdit={true}
            paramId={param.id}
            setIsEditState={setIsEditState}
          />
        </St.WriteWrap>
      ) : (
        <St.ContentsContainer>
          <St.DetailBody>
            {posts?.map((post) => {
              return (
                <div key={post.post_id}>
                  <div>
                    <St.MainTopper>
                      <St.TitleCategory>
                        <St.BackBtnBox>
                          <St.BackIcon onClick={() => navigate(-1)} />
                        </St.BackBtnBox>
                        <h1>{post.title}</h1>
                        <St.Category>{post.category}</St.Category>
                      </St.TitleCategory>
                      <St.Dots onClick={() => setEditToolOpen(!editToolOpen)} />
                      {posts![0].post_user === userId ? (
                        ''
                      ) : (
                        <St.ReportArea onClick={handleOpenForm}>
                          <St.AlertIcon />
                          <p>신고하기</p>
                        </St.ReportArea>
                      )}
                    </St.MainTopper>

                    <St.SubTopper>
                      <St.TitleCategory>
                        {postUser.length > 0 ? (
                          <St.ProfileImage src={postUser[0].avatar_url} />
                        ) : (
                          <St.DefaultImage></St.DefaultImage>
                        )}

                        <St.NameP>
                          {!!post.anon
                            ? '익명의 작업자'
                            : postUser[0]?.nickname
                            ? postUser[0]?.nickname
                            : postUser[0]?.username}
                        </St.NameP>
                        <St.TimeP>{parseDate(post.created_at)}</St.TimeP>
                      </St.TitleCategory>

                      {editToolOpen && (
                        <St.EditDropdown>
                          {posts[0].post_user === userId ? (
                            <>
                              <St.DropdownItem
                                onClick={() => {
                                  setIsEditState(true);
                                  setEditToolOpen(!editToolOpen);
                                }}
                              >
                                수정하기
                              </St.DropdownItem>
                              <St.DropdownItem onClick={deletePostHandle}>
                                삭제하기
                              </St.DropdownItem>
                            </>
                          ) : (
                            <St.DropdownItem onClick={handleOpenForm}>
                              신고하기
                            </St.DropdownItem>
                          )}
                        </St.EditDropdown>
                      )}
                      <St.FeatureArea>
                        {posts![0].post_user === userId ? (
                          <St.IconContainer>
                            <St.IconWrapper
                              onClick={() => {
                                setIsEditState(true);
                              }}
                            >
                              <St.PenIcon />
                              <St.BtnStyle>수정</St.BtnStyle>
                            </St.IconWrapper>
                            <St.IconWrapper onClick={deletePostHandle}>
                              <St.TrachIcon />
                              <St.BtnStyle>삭제</St.BtnStyle>
                            </St.IconWrapper>
                          </St.IconContainer>
                        ) : (
                          ''
                        )}
                      </St.FeatureArea>
                    </St.SubTopper>
                  </div>{' '}
                  <St.Content>{parse(post.content)}</St.Content>
                  {post.files && post.files.length > 0 && (
                    <CommuFileList files={post.files} />
                  )}{' '}
                </div>
              );
            })}{' '}
          </St.DetailBody>
          <St.NoticeLike>글이 마음에 든다면 추천을 눌러보세요!</St.NoticeLike>

          <div>
            <Reply
              userId={userId}
              paramId={param.id}
              likes={posts![0].likes}
              postUserId={posts![0].post_user}
            />
          </div>
          {isOpen && <QnAFrom />}
        </St.ContentsContainer>
      )}
    </St.Container>
  );
};

export default CommuDetail;
