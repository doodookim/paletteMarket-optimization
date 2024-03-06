import React, { useEffect, useRef, useState } from 'react';
import {
  StCancelAndSaveWrapper,
  StEditUserPhoto,
  StNicknameWrapper,
  StProfileContainer,
  StProfileContent,
  StProfileContentButtonWrapper,
  StProfileContentContainer,
  StProfileContentWrapper,
  StProfileImageWrapper,
  StSaveButton,
  StSettingButton,
  StSettingMenu
} from '../../../styles/mypageStyle/ProfileStyle';
import { supabase } from '../../../api/supabase/supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  getUserProfile,
  updateUserImage,
  updateUserNickname
} from '../../../api/supabase/profile';
import { useAppDispatch } from '../../../redux/reduxHooks/reduxBase';
import { setSuccessLogout } from '../../../redux/modules/authSlice';
import { useNavigate } from 'react-router';
import ProfileMobileNav from './ProfileMobileNav';
import QnAFrom from './QnAFrom';
import { setIsOpenForm } from '../../../redux/modules/openForm';
import FileResizer from 'react-image-file-resizer';
interface User {
  username: string;
}

const Profile = () => {
  const userId = localStorage.getItem('userId');
  const [isEditing, setIsEditing] = useState(false);
  const [userNickname, setUserNickname] = useState<string | undefined>();
  const [profileImage, setProfileImage] = useState<string | null>();
  const [imagePath, setImagePath] = useState<string>();
  const fileInput = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: userData } = useQuery({
    queryKey: ['userData'],
    queryFn: () => getUserProfile(userId)
  });

  const clickDeleteUserHandler = async () => {
    if (window.confirm('정말 탈퇴 하시겠습니까?')) {
      if (userId) {
        const { data, error } = await supabase.auth.admin.deleteUser(userId);
        localStorage.removeItem('userId');
        dispatch(setSuccessLogout());
        navigate('/login');
        await supabase.from('user').delete().eq('id', userId);
      }
      alert('정상적으로 탈퇴되었습니다.');
    } else {
      alert('취소합니다.');
    }
  };

  const openFormHandler = () => {
    dispatch(setIsOpenForm());
  };

  // profile 수정 버튼
  const clickEditHandler = () => {
    setIsEditing(true);
    setIsOpen(false);
  };

  // profile 수정 취소
  const cancelEditHandler = () => {
    setIsEditing(false);
  };

  // nickname input onChange
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNickname(e.target.value);
  };

  // auth에 있는 avatar_url 변경
  const updateAuthAvatarHandler = async () => {
    const { data, error } = await supabase.auth.updateUser({
      data: { avatar_url: profileImage }
    });
  };

  // 사진 업로드 버튼 클릭
  const clickUploadProfileImage = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const { mutate: updateNickname } = useMutation(updateUserNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries('userData');
    }
  });

  const { mutate: updateProfileImage } = useMutation(updateUserImage, {
    onSuccess: () => {
      queryClient.invalidateQueries('userData');
    }
  });

  const openSettinMenuHandler = () => {
    setIsOpen(isOpen ? false : true);
  };

  const clickUpdateProfile = () => {
    if (userNickname && userId) {
      updateNickname({
        nickname: userNickname,
        id: userId
      });
    }

    if (profileImage && userId) {
      updateProfileImage({
        avatar_url: profileImage,
        id: userId
      });
    }
    updateAuthAvatarHandler();
    setIsEditing(false);
  };

  const getUrl = async () => {
    if (imagePath !== undefined) {
      const { data } = await supabase.storage
        .from('profiles')
        .getPublicUrl(imagePath);
      setProfileImage(data.publicUrl);
    }
  };

  useEffect(() => {
    getUrl();
  }, [imagePath]);

  const uploadProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      // 사진 resize 해주는 함수
      const resizeFile = (file: File) =>
        new Promise((res) => {
          FileResizer.imageFileResizer(
            file,
            1500,
            1500,
            'WEBP',
            20,
            0,
            (uri) => res(uri),
            'file'
          );
        });
      const resize = await resizeFile(file);
      const { data, error } = await supabase.storage
        .from('profiles')
        .upload(userId + '/' + uuidv4(), resize as File, {
          upsert: true
        });

      if (data) {
        setImagePath(data?.path);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <StProfileContainer>
      <ProfileMobileNav />
      {userData?.map((user) => {
        return (
          <StProfileContentContainer key={user.id}>
            <StProfileImageWrapper>
              <img
                src={!profileImage ? user.avatar_url : profileImage}
                alt="사용자 프로필 사진"
              />
              <input
                type="file"
                ref={fileInput}
                onChange={(e) => uploadProfileImage(e)}
              />
              {isEditing && (
                <StEditUserPhoto onClick={clickUploadProfileImage} />
              )}
            </StProfileImageWrapper>

            <StProfileContentWrapper>
              <StProfileContentButtonWrapper>
                <StNicknameWrapper>
                  <div>
                    {isEditing ? (
                      <input
                        defaultValue={
                          !user.nickname ? user.username : user.nickname
                        }
                        onChange={onChangeNickname}
                        placeholder="최대 8자"
                        maxLength={8}
                      />
                    ) : (
                      <h2>{!user.nickname ? user.username : user.nickname}</h2>
                    )}

                    {!isEditing && (
                      <StSettingButton onClick={openSettinMenuHandler} />
                    )}
                  </div>

                  {isOpen && (
                    <StSettingMenu>
                      <li onClick={clickEditHandler}>프로필 수정하기</li>
                      <li onClick={openFormHandler}>문의하기</li>
                      <li onClick={clickDeleteUserHandler}>회원탈퇴</li>
                    </StSettingMenu>
                  )}

                  {isEditing && (
                    <StCancelAndSaveWrapper>
                      <button onClick={cancelEditHandler}>취소</button>
                      <StSaveButton onClick={clickUpdateProfile}>
                        저장
                      </StSaveButton>
                    </StCancelAndSaveWrapper>
                  )}
                </StNicknameWrapper>
              </StProfileContentButtonWrapper>

              <StProfileContent>
                <span>이름</span>
                <span>{user.username}</span>
                <span>이메일</span>
                <span>{user.email}</span>
              </StProfileContent>
            </StProfileContentWrapper>
          </StProfileContentContainer>
        );
      })}
    </StProfileContainer>
  );
};

export default Profile;
