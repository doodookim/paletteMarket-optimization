import React, { MouseEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { supabase } from '../../api/supabase/supabaseClient';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetailInfo from '../../components/productDetail/DetailInfo/ProductDetailInfo';
import * as St from './style';
import type { CustomUser, Product } from './types';
import { RoomType } from '../../components/chat/types';
import { v4 as uuid } from 'uuid';
import ProductDetailCarousel from '../../components/productDetail/detailCarousel/ProductDetailCarousel';
import {
  createRoom,
  getOthers,
  getProductInfo,
  getSimilar,
  handleAddRoomIntoUsers,
  handleCheckIsSoldOut,
  isLikedProduct,
  makeChatRoom,
  sendInitMessage
} from './supabase_Detail/supabaseAPI';
import ProductChatList from '../../components/productDetail/chatList/ProductChatList';
import ProductDetailInfoHeader from '../../components/productDetail/DetailInfo/ProductDetailInfoHeader';
import ProductPriceWrapper from '../../components/productDetail/chatList/detailBody/ProductPriceWrapper';
import ProductButton from '../../components/productDetail/chatList/detailBody/ProductButton';
import {
  getProduct,
  getTargetData,
  getUserData,
  handleCancleLike,
  handleDeletePost,
  handleGetLikeCount,
  handleLike,
  handleSellComplete,
  isExistsRoom
} from '../../components/productDetail/ProductDetailFn';
import { IoIosAdd } from '@react-icons/all-files/io/IoIosAdd';
import { HiSparkles } from '@react-icons/all-files/hi/HiSparkles';
import { FaLocationArrow } from '@react-icons/all-files/fa/FaLocationArrow';
import { FaTruck } from '@react-icons/all-files/fa/FaTruck';
import { RiExchangeFill } from '@react-icons/all-files/ri/RiExchangeFill';
import ImageViewer from '../../components/productDetail/ImageViewer';
import Recommend from '../../components/productDetail/chatList/detailBody/Recommend';
import QnAFrom from '../../components/mypage/Profile/QnAFrom';
import { useAppSelector } from '../../redux/reduxHooks/reduxBase';
// DB의 채팅방 테이블 조회 후 같은 게시물에 대한 정보를 가진 채팅방이 존재하면
// 채팅 보내고 구매하기 버튼 대신 이어서 채팅하기로 전환

const ProductDetail = () => {
  const { id } = useParams();
  const navi = useNavigate();
  const [curUser, setCurUser] = useState<CustomUser | null>(null);
  const [target, setTarget] = useState<CustomUser | null>(null);
  const [product, setProduct] = useState<Product[] | null>(null);
  const [isExist, setIsExist] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [createdChatList, setCreatedChatList] = useState<RoomType[]>([]);
  const [buyerChatId, setBuyerChatId] = useState<string>('');
  const [showChatList, setShowChatList] = useState<boolean>(false);
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [likesCount, setLikesCount] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showViewer, setShowViewer] = useState<boolean>(false);
  const [similar, setSimilar] = useState<Product[]>([]);
  const [otherPosts, setOtherPosts] = useState<Product[]>([]);
  // 신고하기 폼 열기 (지현추가)
  const { isOpen } = useAppSelector((state) => state.openForm);

  // 생성된 채팅방 row에 참여자 정보, 채팅방 이름 삽입
  const insertUserIntoChatRoom = async (
    currentUser: CustomUser | null,
    targetUser: CustomUser | null
  ) => {
    const productInfo = await getProductInfo(id);

    if (productInfo) {
      setProduct(productInfo);
      const roomForm = [
        {
          id: uuid(), // 고유 채팅방 id
          room_name: `${productInfo[0].title}`, // 채팅방 이름
          about: `${id}`, // 채팅방이 어떤 제품과 관련이 있는지 제품 id를 넣음
          // 참여자 정보와 제품 정보를 넣어 참여자와 제품이 모두 같은 방의 중복 생성을 방지
          participants: [
            {
              about: `${id}`,
              isSeller: true, // 구매자와 판매자를 나누는 기준
              user_id: targetUser?.uid, // 상대방은 항상 판매자
              user_name: targetUser?.username,
              avatar_url: targetUser?.avatar_url
            },
            {
              about: `${id}`,
              isSeller: false,
              user_id: currentUser?.uid,
              user_name: currentUser?.username,
              avatar_url: currentUser?.avatar_url
            }
          ]
        }
      ];
      const chatRoom = await createRoom(roomForm);
      ////////////////// 방 생성 후 유저들에게 소속된 방을 추가 //////////////

      // 방이 생겼다면 유저들의 chat_room 필드에 생성 된 채팅방을 넣어주자
      if (chatRoom && currentUser && targetUser) {
        await Promise.all([
          handleAddRoomIntoUsers(currentUser, chatRoom),
          handleAddRoomIntoUsers(targetUser, chatRoom),
          sendInitMessage(product, chatRoom, currentUser, navi)
        ]);
      }
    }
  };

  // 판매 완료 때 사용 할 제품 관련 사용자 리스트 가져오기
  const handleLoadChatRooms = async () => {
    const { data: roomList, error: roomListFetchError } = await supabase
      .from('chat_room')
      .select('*')
      .eq('about', id);
    if (roomList) {
      setCreatedChatList(roomList);
    }
    if (roomListFetchError) {
      console.log('no exists created Room');
    }
  };

  // 채팅 리스트 보여주기
  const handleShowChatList = () => {
    setShowChatList(true);
  };

  const checkWindowSize = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    getProduct({ id, setProduct });
    window.scrollTo({ top: 0 });
  }, [id]);

  useEffect(() => {
    getUserData({ setCurUser });
    getTargetData({ id, setTarget });
    getProduct({ id, setProduct });
    handleCheckIsSoldOut({ id, setIsSoldOut });
    handleGetLikeCount({ id, setLikesCount });
  }, []);

  useEffect(() => {
    if (target) {
      getOthers(target?.uid, setOtherPosts);
    }
    if (product) {
      getSimilar(product[0].tags, setSimilar);
    }
  }, [target, product]);

  useEffect(() => {
    if (curUser) {
      isLikedProduct({ curUser, id, setIsLiked });
      isExistsRoom({ id, curUser, setIsExist });
    }
  }, [curUser]);

  useEffect(() => {
    checkWindowSize();
    window.addEventListener('DOMContentLoaded', checkWindowSize);
    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('DOMContentLoaded', checkWindowSize);
      window.removeEventListener('resize', checkWindowSize);
    };
  });

  if (product === null) return <div>로딩 중</div>;

  const labels = [
    {
      tag: '수량',
      icon: <IoIosAdd />
    },
    {
      tag: '상태',
      icon: <HiSparkles />
    },
    {
      tag: '거래 방식',
      icon: <FaLocationArrow />
    },
    {
      tag: '직거래 장소',
      icon: <FaTruck />
    },
    {
      tag: '교환',
      icon: <RiExchangeFill />
    }
  ];

  const data = product[0];
  const productInfo = [
    data.count,
    data.quality,
    data.deal_type,
    data.address,
    data.exchange_product,
    data.changable,
    data.shipping_cost
  ];

  // 수정할 기본 데이터를 담은 변수 선언(하빈 추가)
  const selectedProductData = {
    id: data.id,
    image_url: data.image_url,
    title: data.title,
    category: data.category,
    price: data.price,
    shipping_cost: data.shipping_cost,
    count: data.count,
    deal_type: data.deal_type,
    address: data.address,
    quality: data.quality,
    changable: data.changable,
    exchange_product: data.exchange_product,
    contents: data.contents,
    detailAddress: data.detailAddress,
    tags: data?.tags,
    agreement: data.agreement
  };

  return (
    <>
      {showChatList && (
        <ProductChatList
          createdChatList={createdChatList}
          curUser={curUser}
          handleSellComplete={() => {
            handleSellComplete({ selectedUser, buyerChatId, navi, id });
          }}
          selectedUser={selectedUser}
          setBuyerChatId={setBuyerChatId}
          setSelectedUser={setSelectedUser}
          setShowChatList={setShowChatList}
        />
      )}
      {showViewer && (
        // 모바일 때 위치 조정 //
        <ImageViewer product={product} setShowViewer={setShowViewer} />
      )}

      <ToastContainer />
      {/* 본체 */}
      <St.StDetailContainer>
        <St.StDetailInfoSection>
          <St.StImageWrapper onClick={() => setShowViewer(true)}>
            <ProductDetailCarousel
              carouselImages={
                product[0]?.image_url === null ? [] : product[0]?.image_url
              }
            />
          </St.StImageWrapper>
          {/* 게시물 상단 */}
          <St.StProductInfo>
            <ProductDetailInfoHeader
              curUser={curUser}
              data={data}
              handleDeletePost={() => {
                handleDeletePost({ id, navi });
              }}
              isMobile={isMobile}
              product={product}
              target={target}
              selectedProductData={selectedProductData}
            ></ProductDetailInfoHeader>
            <St.StHeaderTitle>{data.title}</St.StHeaderTitle>
            <ProductPriceWrapper data={data} isMobile={isMobile} />
            <St.StProductInfoBody>
              <ProductDetailInfo
                labels={labels}
                productInfo={productInfo}
                data={data}
              />
            </St.StProductInfoBody>
            {/* 판매자와 구매자에게 다르게 보이는 버튼 */}
            <ProductButton
              curUser={curUser}
              handleCancleLike={() => {
                handleCancleLike({
                  id,
                  curUser,
                  isLikedProduct,
                  setIsLiked,
                  setLikesCount
                });
              }}
              handleLike={() => {
                handleLike({
                  curUser,
                  id,
                  isLikedProduct,
                  setIsLiked,
                  setLikesCount
                });
              }}
              handleLoadChatRooms={handleLoadChatRooms}
              handleShowChatList={handleShowChatList}
              isExist={isExist}
              isLiked={isLiked}
              isSoldOut={isSoldOut}
              likesCount={likesCount}
              makeChatRoom={(e: any) =>
                makeChatRoom({
                  e,
                  insertUserIntoChatRoom,
                  navi,
                  setCurUser,
                  setTarget
                })
              }
              product={product}
            />
          </St.StProductInfo>
        </St.StDetailInfoSection>
        {/* 상품 설명란 */}
        <St.StProductIntroSection>
          <St.StProductIntroTitle>상품 설명</St.StProductIntroTitle>
          <St.StProductContent>{data.contents}</St.StProductContent>
          <St.StProductCategory>
            {data.tags?.map((tag: string, i: number) => {
              return <St.StCategoryTag key={i}># {tag}</St.StCategoryTag>;
            })}
          </St.StProductCategory>
        </St.StProductIntroSection>
        {/* 상품 추천 섹션 */}
        <Recommend
          otherPosts={otherPosts}
          similar={similar}
          product={product}
        />
        {/* 신고하기 폼 작성 (지현추가) */}
        {isOpen && <QnAFrom />}
      </St.StDetailContainer>
    </>
  );
};

export default ProductDetail;
