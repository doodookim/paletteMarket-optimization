import React from 'react';
import * as St from '../../../../pages/productsDetail/style';
import { useNavigate } from 'react-router';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { ButtonProps } from '../ChatListTypes';

const ProductButton = ({
  curUser,
  handleLoadChatRooms,
  handleShowChatList,
  isLiked,
  isExist,
  handleLike,
  isSoldOut,
  product,
  makeChatRoom,
  likesCount,
  handleCancleLike
}: ButtonProps) => {
  const navi = useNavigate();

  return (
    <>
      {product[0].post_user_uid === curUser?.uid ? (
        <St.ButtonWrapper>
          <St.Button
            $role="chat"
            onClick={() => {
              handleLoadChatRooms();
              handleShowChatList();
            }}
          >
            <h3>판매 완료로 전환하기</h3>
          </St.Button>
        </St.ButtonWrapper>
      ) : (
        <St.ButtonWrapper>
          {isLiked === false ? (
            <St.Button $role="like" onClick={handleLike}>
              <p>
                <St.FaHeartIcon />
                {likesCount}
              </p>
            </St.Button>
          ) : (
            // //////////////////////
            // 실시간 좋아요 개수 반영
            /////////////////////////
            <St.Button $role="like" onClick={handleCancleLike}>
              <p>
                <FaHeart
                  style={{
                    marginBlock: '0.4rem',
                    fontSize: '2.2rem',
                    color: 'red'
                  }}
                />
                {likesCount}
              </p>
            </St.Button>
          )}

          {/* 게시물 작성자가 아닌 사람이 보이는 버튼 */}
          {/* 작성자 ID 가져오기 */}
          {isSoldOut ? (
            <St.Button $role="sold-out">
              <h3>판매 완료되었습니다</h3>
            </St.Button>
          ) : isExist ? (
            <St.Button $role="chat" onClick={() => navi('/chat')}>
              <h3>채팅으로 이동하기</h3>
            </St.Button>
          ) : (
            <St.Button
              $role="chat"
              id={product[0]?.post_user_uid}
              data-about={product[0]?.post_user_uid}
              onClick={makeChatRoom}
            >
              <h3>채팅 보내고 구매하기</h3>
            </St.Button>
          )}
        </St.ButtonWrapper>
      )}
    </>
  );
};
export default ProductButton;
