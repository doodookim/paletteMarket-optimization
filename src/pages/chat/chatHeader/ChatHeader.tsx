import React, { useEffect, useState } from 'react';
import * as St from '../style';
import { SupabaseAPI } from '../supabaseChat/supabase_chat';
import { Participants } from '../../../components/chat/types';
import { BsThreeDots } from '@react-icons/all-files/bs/BsThreeDots';
import { supabase } from '../../../api/supabase/supabaseClient';
import { ChatHeaderPropsType } from './ChatHeaderType';
import { checkDevice } from '../../../components/chat/chatRoom/CheckDvice';

const ChatHeader = ({
  showMene,
  clicked,
  curUser,
  targetUser,
  setRooms,
  setMessages,
  setClicked,
  setShowMenu,
  handleHideBoardPosition
}: ChatHeaderPropsType) => {
  const supaService = new SupabaseAPI();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentRoomsUser, setCurrentRoomsUser] = useState<any>();

  const handleShowMenuToggle = () => {
    setShowMenu((prev) => !prev);
  };

  const getRoomInfo = async (room_id: string) => {
    const { data: room, error } = await supabase
      .from('chat_room')
      .select('*')
      .eq('id', clicked);

    if (room) {
      const currentRoomTargetUser = room[0].participants.filter(
        (part: Partial<Participants>) => {
          return part.user_id !== curUser?.id;
        }
      );

      setCurrentRoomsUser(currentRoomTargetUser);
    }
  };

  useEffect(() => {
    if (checkDevice(window.navigator.userAgent)) setIsMobile(true);
    if (checkDevice(window.navigator.userAgent)) setIsMobile(false);
    getRoomInfo(clicked);
    setShowMenu(false);
  }, [clicked]);

  return (
    <St.StChatBoardHeader>
      {showMene && (
        <St.StMenuBox>
          <St.StMenu
            onClick={() => {
              supaService.handleOutChatRoom(
                clicked,
                curUser,
                targetUser,
                setRooms,
                setMessages,
                setClicked,
                handleHideBoardPosition
              );
              setShowMenu(false);
            }}
          >
            채팅방 나가기
          </St.StMenu>
          <St.StMenu onClick={() => alert('개발 중인 기능입니다!')}>
            신고하기
          </St.StMenu>
        </St.StMenuBox>
      )}
      <St.StChatBoardHeaderName>
        <St.StHeaderArrow onClick={() => handleHideBoardPosition()} />

        <St.StListUserProfile
          $url={currentRoomsUser && currentRoomsUser[0]?.avatar_url}
        ></St.StListUserProfile>
        <p>{currentRoomsUser && currentRoomsUser[0]?.user_name}</p>
      </St.StChatBoardHeaderName>
      <BsThreeDots
        style={{ cursor: 'pointer', fontSize: '1.5rem' }}
        onClick={handleShowMenuToggle}
      />
    </St.StChatBoardHeader>
  );
};

export default ChatHeader;
