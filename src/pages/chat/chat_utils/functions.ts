import { FormEvent, SetStateAction } from 'react';
import { supabase } from '../../../api/supabase/supabaseClient';
import {
  MessageType,
  Participants,
  RoomType
} from '../../../components/chat/types';
import { User } from '@supabase/gotrue-js';
import { v4 as uuid } from 'uuid';

export class UtilForChat {
  // 상대 유저 정보 가져오기
  handleTargetUser = async (
    rooms: RoomType[] | null | undefined,
    clicked: string | undefined,
    setTargetUser: React.Dispatch<SetStateAction<any[] | undefined>>
  ) => {
    const target = rooms?.find((room: RoomType) => room.id === clicked);
    const { data, error } = await supabase
      .from('user')
      .select('*')
      .eq('username', target?.room_name);
    if (error) console.log('상대방 정보 가져오기 실패');

    if (data) {
      setTargetUser(data);
    }
  };

  // 어느 채팅방을 클릭 시 해당 채팅방과 연결 된 메세지 가져오는 함수
  getMessages = async (
    clicked: string | undefined,
    setMessages: React.Dispatch<SetStateAction<MessageType[]>>,
    messeages: MessageType[]
  ) => {
    let { data: chat_messages, error } = await supabase
      .from('chat_messages')
      .select(`*`)
      .eq('chat_room_id', clicked);

    if (chat_messages) {
      // 기존 메시지를 완전히 대체하는 방식으로 수정
      setMessages(chat_messages as MessageType[]);
    }

    if (error) return;
  };

  // 유저 정보를 확인하여 유저가 속한 채팅방 가져오는 함수
  getRoomsforUser = async (
    curUser: User | null | undefined,
    setRooms: React.Dispatch<SetStateAction<RoomType[] | null | undefined>>,
    clicked: string | undefined,
    setMessages: React.Dispatch<SetStateAction<MessageType[]>>
  ) => {
    const { data: chat_room, error } = await supabase
      .from('chat_room')
      .select('*');

    // curUser.id와 일치하는 participant를 포함한 방만 필터링
    if (chat_room && curUser) {
      const filtered = chat_room.filter((room: RoomType) => {
        return room.participants.some(
          (participant: Participants) => participant.user_id === curUser.id
        );
      });
      setRooms(filtered);
    }

    if (error) {
      console.error('채팅방 가져오기 오류', error);
      return;
    }
  };

  getUserName = (
    rooms: RoomType[] | undefined | null,
    clicked: string | undefined
  ) => {
    if (rooms && clicked) {
      const room = rooms.find((room: RoomType) => room.id === clicked);
      return room?.room_name;
    }
    return undefined; // 또는 다른 기본값
  };

  // 이미지 인풋의 파일을 받아 storage에 올리는 함수에 전달
  handleImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setImages: React.Dispatch<SetStateAction<string>>
  ) => {
    const file = e.target.files;
    if (file && file !== undefined) {
      this.handleImageUpload(file[0], setImages);
    }
    if (!file) console.log('다시 시도');
  };

  // 이미지 정보 받아서 storage에 올리는 함수
  handleImageUpload = async (
    file: File,
    setImages: React.Dispatch<SetStateAction<string>>
  ) => {
    if (file !== undefined) {
      const { data, error } = await supabase.storage
        .from('images')
        .upload(`images/${uuid()}`, file);

      if (error) {
        console.error('파일 업로드 실패:', error);
        return;
      }

      // 에러가 아니라면 스토리지에서 방금 올린 이미지의 publicURL을 받아와서 image state에 set
      const res = supabase.storage.from('images').getPublicUrl(data.path);
      setImages(res.data.publicUrl);
    } else {
      return;
    }
  };

  // 실시간으로 구독 중인 DB 관리하는 함수
  handleRealtime = (
    clicked: string | undefined,
    setMessages: React.Dispatch<SetStateAction<MessageType[]>>,
    curUser: User | null | undefined,
    setRooms: React.Dispatch<SetStateAction<RoomType[] | null | undefined>>,
    messages: MessageType[]
  ) => {
    // 채팅방 테이블 구독
    const chatRooms = supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'chat_room' },
        (payload) => {
          this.getMessages(clicked, setMessages, messages);
          this.getRoomsforUser(curUser, setRooms, clicked, setMessages);
        }
      )
      .subscribe();

    const chatMessages = supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'chat_messages' },
        (payload) => {
          // 변경사항이 발생하면 해당 채팅방의 메시지를 다시 불러옴
          if (clicked) {
            this.getMessages(clicked, setMessages, messages);
          }
        }
      )
      .subscribe();

    // unmount 시 구독 해제 하기 위해서 반환
    return { chatRooms };
  };

  getUserData = async (
    setCurUser: React.Dispatch<SetStateAction<User | null | undefined>>
  ) => {
    const { data, error } = await supabase.auth.getUser();

    if (data) setCurUser(data.user);
    if (error) console.log('user data fetch failed', error);
  };

  // 메세지 전송 - 메세지 테이블에 insert
  sendMessage = async (
    e: FormEvent,
    curUser: User | null | undefined,
    clicked: string | undefined,
    chatInput: string,
    images: (string | undefined)[]
  ) => {
    e.preventDefault();

    if (!curUser) return;

    if (chatInput.trim() === '' && images.length === 0) {
      alert('메세지를 입력해주세요');
      return;
    }
    const messageTemp = {
      id: uuid(),
      sender_id: curUser?.id,
      chat_room_id: clicked,
      content: chatInput === '' ? null : chatInput,
      image_url: images.length > 0 ? images : null
    };

    if (curUser) {
      const { error } = await supabase
        .from('chat_messages')
        .insert([messageTemp]);

      if (error) console.log('전송 실패', error);

      const { error: timeUpdateError } = await supabase
        .from('chat_room')
        .update({ last_updated: new Date() })
        .eq('id', clicked);

      if (timeUpdateError) console.log('시간 업데이트 오류');
    }
  };
}
