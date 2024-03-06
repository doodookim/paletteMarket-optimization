import { useEffect, useState } from 'react';
import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { supabase } from '../../api/supabase/supabaseClient';
import CommunityList from '../../components/community/CommunityList';
import { fetchData } from '../../components/main/DataFetch';
import ProductsCard from '../../components/prducts/ProductsCard';
import { StFadeAni } from '../../pages/productsDetail/style';

type UsedItemsCountData = {
  count: number | null;
  data: {
    length: number;
  } | null;
};
const Home = () => {
  const navigate = useNavigate();

  const carouselImages: string[] = [
    process.env.PUBLIC_URL + '/assets/bannerMain.jpg',
    process.env.PUBLIC_URL + '/assets/carousel0.png',
    process.env.PUBLIC_URL + '/assets/carousel1.png',
    process.env.PUBLIC_URL + '/assets/carousel2.png',
    process.env.PUBLIC_URL + '/assets/carousel3.png'
  ];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // 처음 홈화면이 로딩되었을때 현 사용자의 ID를 가져와 로컬스토리지에 담는 로직 시작 (중감자동무)//
  const getUserId = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (data && data.user) {
      localStorage.setItem('userId', data.user.id);
    }
  };

  useEffect(() => {
    getUserId();
  }, []);
  // 처음 홈화면이 로딩되었을때 현 사용자의 ID를 가져와 로컬스토리지에 담는 로직 시작 끝 (중감자동무)//

  // 전체 데이터 개수를 가져오는 쿼리

  // 중고게시물 전체 데이터 개수를 가져오는 쿼리
  const {
    data: usedItemsCountData,
    isLoading: usedItemsCountLoading,
    isError: usedItemsCountError
  } = useQuery<UsedItemsCountData>('usedItemsCount', async () => {
    const count = await supabase.from('products').select('*');
    return count;
  });

  const {
    data: { usedItems = [], communityItems = [] } = {},
    isLoading,
    isError
  } = useQuery('data', fetchData);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>데이터 불러오기를 실패했습니다.</div>;
  }

  const handleText = (content: string): string => {
    // 정규 표현식을 사용하여 태그를 제외한 텍스트만 추출
    const textOnly = content.replace(/<[^>]*>|&nbsp;/g, ' ');
    return textOnly;
  };

  const scrollToSection = (height: number) => {
    window.scrollTo({ top: height, behavior: 'smooth' });
  };

  // 중고목록 map 돌리기 위한 변수 선언(하빈 추가)
  const productsPosts = usedItems.slice(0, isMobile ? 6 : 10);

  return (
    <HomeContainer>
      <BannerContainer>
        <MainBannerpic src="/assets/MainBannerPic.jpg" alt="메인배너사진" />

        <ButtonContainer>
          <ProductsBannerContainer>
            <img
              style={{ width: '61rem', height: '20rem' }}
              src="/assets/중고거래.svg"
              alt="중고거래"
            />
            <ScrollButton onClick={() => scrollToSection(800)}>
              <img
                style={{ width: '36.8rem', height: '9.2rem' }}
                src="/assets/중고거래버튼.svg"
                alt="중고거래버튼"
              />
            </ScrollButton>
          </ProductsBannerContainer>
          <CommunityBannerContainer>
            <img
              style={{ width: '50em', height: '20rem' }}
              src="/assets/커뮤니티.svg"
              alt="커뮤니티"
            />
            <ScrollButton onClick={() => scrollToSection(1570)}>
              <img
                style={{ width: '36.8rem', height: '9.2rem' }}
                src="/assets/커뮤버튼.svg"
                alt="커뮤니티버튼"
              />
            </ScrollButton>
          </CommunityBannerContainer>
        </ButtonContainer>
      </BannerContainer>

      <AllCardContainer>
        <ProductsContainer>
          <ProductsTitle>
            <div>
              {usedItemsCountData?.data?.length}개의 물품이 거래되고 있어요!
            </div>
            <ProductsLink to="/products">
              전체보기
              <FaArrowRight />
            </ProductsLink>
          </ProductsTitle>
          {/* 하빈 수정 */}
          <ProductsCard posts={productsPosts} />
        </ProductsContainer>

        <ComunityContainer>
          <Communitytitle>
            <h2>작업자들의 커뮤니티에 함께해볼까요?</h2>
            <CommunityLink to="/community">
              전체보기
              <FaArrowRight />
            </CommunityLink>
          </Communitytitle>
          <ComunityWrapper></ComunityWrapper>
          <CommunityList posts={communityItems} />
        </ComunityContainer>
      </AllCardContainer>
    </HomeContainer>
  );
};
export default Home;

const HomeContainer = styled.section`
  display: flex;
  width: 144rem;
  /* height: 170rem; */
  min-height: 100vh;
  flex-direction: column;
  margin: 0px auto;
  animation: ${StFadeAni} 0.3s ease;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 76.8rem;
    min-width: 32rem;
  }
`;

const MainBannerpic = styled.img`
  width: 100%;
  max-width: 144rem;
  height: 63rem;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 144rem;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10rem;
`;

const ProductsBannerContainer = styled.div`
  width: 120rem;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  gap: 10rem;
`;
const CommunityBannerContainer = styled.div`
  width: 120rem;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  gap: 10rem;
`;
const ScrollButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const AllCardContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 1300px) {
    width: 130rem;
  }
  @media screen and (max-width: 1024px) {
    width: 10;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const ProductsContainer = styled.div`
  width: 111.6rem;
  margin: 0 auto;
  margin-top: 4rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 32rem;
    margin-top: 2rem;
  }
`;
const ProductsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  margin-bottom: 5rem;
  font-size: var(--fontSize-H3);
  @media screen and (max-width: 768px) {
    font-size: var(--fontSize-H5);
  }
`;

const ProductsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  cursor: pointer;
  width: 8.3rem;
  height: 3.2rem;
  background: var(--opc-20);
  border-radius: 4.5rem;
  font-size: var(--fontSize-H6);
  font-weight: var(--fontWeight-medium);
  color: var(--11-gray);
  @media screen and (max-width: 768px) {
    background: none;
    width: 6rem;
    /* line-height: 191.2%; */
    font-size: 1.1rem;
    gap: 0.3rem;
  }
  &:hover {
    background-color: var(--opc-100);
    color: var(--bgColor);
  }
  svg {
    width: 1rem;
    height: 0.9rem;
    @media screen and (max-width: 768px) {
      width: 1rem;
      height: 0.9rem;
      color: var(--opc-100);
    }
  }
`;

const ComunityContainer = styled.div`
  max-width: 111.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 8rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;
  }
`;

const Communitytitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }

  h2 {
    font-size: var(--fontSize-H3);
    @media screen and (max-width: 768px) {
      width: 20.8rem;
      height: 2.7rem;
      font-size: var(--fontSize-H5);
      font-weight: var(--fontWeight-medium);
      vertical-align: baseline;
      padding-top: 0.63rem;
    }
  }
`;
const CommunityLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.3rem;
  height: 3.2rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: var(--fontWeight-bold);
  gap: 0.8rem;
  background: var(--opc-20);
  border-radius: 4.5rem;
  font-size: var(--fontSize-H6);
  font-weight: var(--fontWeight-medium);
  color: var(--11-gray);
  @media screen and (max-width: 768px) {
    display: flex;
    background: none;
    width: 6rem;
    font-size: 1.1rem;
    gap: 0.3rem;
  }
  &:hover {
    background-color: var(--opc-100);
    color: var(--bgColor);
  }
  /* p {
    @media screen and (max-width: 768px) {
      line-height: 50%;
    }
  } */
  svg {
    width: 1rem;
    height: 0.9rem;
    @media screen and (max-width: 768px) {
      width: 9px;
      height: 8px;
      color: var(--opc-100);
    }
  }
`;

const ComunityWrapper = styled.ul`
  width: 100%;
  /* margin: 2.2rem auto; */
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  /* row-gap: 2rem;
  column-gap: 2rem; */
  padding: 1.5rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

const ToCommunityDetailPage = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-weight: var(--fontWeight-bold);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ComunityList = styled.li`
  width: 100%;
  height: 19.5rem;
  display: inline-block;
  position: relative;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--3-gray);
  padding: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 14rem;
    padding: 1rem;
  }

  .commupic {
    width: 100%;
    display: flex;
    gap: 1.2rem;
    margin-block: 2.5rem;
    @media screen and (max-width: 768px) {
    }
  }

  .community-pic {
    width: 6.6rem;
    height: 6.6rem;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      width: 4rem;
      height: 4rem;
    }
  }
  h3 {
    color: var(--11-gray);
    font-size: var(--fontSize-H3);
    margin-bottom: 1.6rem;
    font-weight: var(--fontWeight-bold);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 48rem;
    @media screen and (max-width: 768px) {
      margin-top: 1rem;
      font-size: var(--fontSize-H5);
      font-weight: var(--fontWeight-bold);
      width: 20rem;
    }
  }
  .withcommu-image {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    height: 6.6rem;
    line-height: 1.2;
    font-size: var(--fontSize-H4);
    font-weight: var(--fontWeight-medium);
    color: var(--8-gray);
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 39rem;
    @media screen and (max-width: 768px) {
      font-size: var(--fontSize-H6);
      line-height: 1.9;
      height: 4rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
      overflow: hidden;
    }
  }
  .withoutcommu-image {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    height: 6.6rem;
    line-height: 1.2;
    font-size: var(--fontSize-H4);
    font-weight: var(--fontWeight-medium);
    color: var(--8-gray);
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 48rem;
    @media screen and (max-width: 768px) {
      font-size: var(--fontSize-H6);
      line-height: 1.9;
      height: 4rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
      overflow: hidden;
    }
  }

  .thumbs {
    position: absolute;
    bottom: 1.5rem;
    left: 3.5rem;
    width: 2rem;
    height: 2rem;
    @media screen and (max-width: 768px) {
      width: 1.3rem;
      height: 1.2rem;
      left: 3rem;
      bottom: 1.5rem;
    }
  }
  .likescount {
    position: absolute;
    text-decoration: none;
    bottom: 1.5rem;
    left: 7rem;
    color: var(--6, #717171);
    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
      left: 5.5rem;
    }
  }
  .commentss {
    position: absolute;
    bottom: 1.5rem;
    left: 12rem;
    width: 2rem;
    height: 2rem;
    @media screen and (max-width: 768px) {
      width: 1.3rem;
      height: 1.2rem;
      left: 8.5rem;
      bottom: 1.5rem;
    }
  }

  span {
    position: absolute;
    text-decoration: none;
    bottom: 1.5rem;
    left: 15rem;
    color: var(--6, #717171);
    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
      left: 11rem;
    }
  }
  h4 {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    color: var(--6, #717171);
    font-size: var(--fontSize-H6);
    @media screen and (max-width: 768px) {
      font-size: 1rem;
      right: 1.5rem;
    }
  }
`;
