import { MouseEvent, SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../api/supabase/supabaseClient';
import SearchBar from '../components/layout/header/SearchBar';
import { setSuccessLogin, setSuccessLogout } from '../redux/modules/authSlice';
import { setSearchQuery, setSearchResults } from '../redux/modules/searchSlice';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks/reduxBase';
import * as St from '../styles/headerStyle/HeaderStyle';
import Hamburger from '../components/layout/header/Hamburger';
import { SideBarProps } from '../components/sideBar/SideBarTypes';
import {
  deleteAllNotification,
  filterPrevNoti
} from '../components/sideBar/SideBarFn';
import NotiRender from '../components/sideBar/noti/NotiRender';
import { useQueryClient, useMutation, QueryClient } from 'react-query';

interface User {
  username: string;
}

const Header = ({
  notification,
  newNotiExists,
  setNewNotiExists,
  setNotification
}: SideBarProps) => {
  const [user, setUser] = useState<User | boolean>(false);
  const [avatarUrl, setAvatarUrl] = useState<string>();
  const { isLogin } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  // 알림 관련
  const [showNoti, setShowNoti] = useState<boolean>(false);
  const [sender, setSender] = useState<any[]>([]);
  const navi = useNavigate();
  const [isShow, setIsShow] = useState<boolean>(false);

  // 반응형 대응 서치 컴포넌트 관련
  const [showSearchComp, setShowSearchComp] = useState<boolean>(false);
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const handleShowSearchComp = () => {
    setShowSearchComp((prev) => !prev);
  };
  // 반응형 대응 햄버거 버튼 , 검색바 열려있으면 검색바 닫기
  const handlShowSearchBurger = () => {
    setShowHamburger((prev) => !prev);
    if (showSearchComp) {
      setShowSearchComp((prev) => !prev);
    }
  };
  // 페이지 이동 시 검색어 초기화 함수
  const handlePageChange = () => {
    dispatch(setSearchQuery('')); // 검색어 초기화
    dispatch(setSearchResults({ usedItemResults: [], communityResults: [] })); // 검색 결과 초기화
  };

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    handlePageChange();
  };

  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  // 로그아웃 버튼
  const handleLogOutButtonClick = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    } else {
      // 로그아웃이 성공 시 로그아웃 상태로 업데이트하기
      dispatch(setSuccessLogout());
      // 사용자 정보 초기화
      setUser(false);
      setAvatarUrl(undefined);
      // 이락균이 추가함 //
      navigate('/');

      localStorage.removeItem('userId');
    }
  };
  // 로그인 상태여부 확인
  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data.session) {
      dispatch(setSuccessLogin());
    } else {
      dispatch(setSuccessLogout());
    }
  };

  // 현재 사용자 정보 가져오기

  const getAuth = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (data.user) {
      setAvatarUrl(data.user.user_metadata.avatar_url);
      const userId = data.user.id;
      const { data: userData, error: userError } = await supabase
        .from('user')
        .select('avatar_url')
        .eq('id', userId)
        .single();
      if (userData && !userError) {
        setAvatarUrl(userData.avatar_url);
      }
    }
  };

  //알림 함수
  const showNotiToggle = () => {
    setShowNoti((prev) => !prev);
    setNewNotiExists(false);
  };

  // 알림을 보낸 사람 찾기
  const getUserName = async (senderId: string) => {
    const { data: senderInfo, error: fetchFailUser } = await supabase
      .from('user')
      .select('*')
      .eq('uid', senderId);

    if (fetchFailUser) console.log('발신자 정보를 찾을 수 없음');
    if (senderInfo) return senderInfo;
  };

  const clickNoti = (e: MouseEvent<HTMLDivElement>) => {
    const clickedItem = e.currentTarget.id;
    filterPrevNoti({
      noti_id: clickedItem,
      notification,
      setNewNotiExists,
      setNotification
    });
    setShowNoti(false);
    setNewNotiExists(false);
    navi('/chat');
  };

  useEffect(() => {
    getSession();
    getAuth();
  }, []);

  useEffect(() => {
    // 각 채팅방 목록이 업데이트될 때마다 안 읽은 메세지 수를 가져오고 상태에 저장
    if (notification) {
      Promise.all(notification.map((noti) => getUserName(noti.sender_id))).then(
        (userInfo) => {
          setSender(userInfo);
        }
      );
    }
  }, [notification]);

  return (
    <>
      <NotiRender
        clickNoti={clickNoti}
        deleteAllNotification={deleteAllNotification}
        notification={notification}
        sender={sender}
        setIsShow={setIsShow}
        setNotification={setNotification}
        setShowNoti={setShowNoti}
        showNoti={showNoti}
        setNewNotiExists={setNewNotiExists}
      />

      <St.HeaderTopContainer>
        <St.HeaderContainer>
          <St.HeaderWrapper>
            <St.HeaderSection>
              <St.Logo
                src="/assets/paletteMarketLogo.webp"
                alt="작업자들"
                onClick={handleLogoClick}
              />
              <St.ButtonContainer>
                <>
                  {isLogin && (
                    <>
                      <St.LogoutButton onClick={handleLogOutButtonClick}>
                        <St.LogoutImage />
                        <St.LogoutWord>로그아웃</St.LogoutWord>
                      </St.LogoutButton>

                      <St.Notice>
                        {newNotiExists && <St.StNotiDot></St.StNotiDot>}
                        <St.NoticeIcon onClick={showNotiToggle} />
                      </St.Notice>
                    </>
                  )}
                  {!isLogin && (
                    <St.Button onClick={handleNavigateToLogin}>
                      로그인/회원가입
                    </St.Button>
                  )}
                  <St.MobileSearchIcon onClick={handleShowSearchComp} />
                  <St.HamburgerMenu onClick={handlShowSearchBurger} />
                  <Hamburger
                    isOpen={showHamburger}
                    onClose={() => setShowHamburger(false)}
                    onLogout={handleLogOutButtonClick}
                    user={user}
                    setUser={() => setUser(false)}
                    avatarUrl={avatarUrl}
                    handleNavigateToLogin={handleNavigateToLogin}
                  />
                </>
              </St.ButtonContainer>
            </St.HeaderSection>
            <St.VisibleSearchBar>
              <SearchBar
                showSearchComp={showSearchComp}
                setShowSearchComp={setShowSearchComp}
              />
            </St.VisibleSearchBar>
          </St.HeaderWrapper>
        </St.HeaderContainer>
        <St.Hr />
      </St.HeaderTopContainer>
    </>
  );
};

export default Header;
