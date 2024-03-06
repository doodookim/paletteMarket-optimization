import React, { Suspense, useEffect, useState } from 'react';
import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight';
import { useQuery } from 'react-query';
import { supabase } from '../../api/supabase/supabaseClient';
import { fetchData } from '../../components/main/DataFetch';
import ProductsSkeleton from '../../components/skeleton/ProductsSkeleton';
import SkeletonCommunityCard from '../../components/skeleton/SkeletonCommunityCard';
import * as St from '../../styles/mainStyle/MainStyle';
import { Post } from '../community/api/model';
type UsedItemsCountData = {
  count: number | null;
  data: {
    length: number;
  } | null;
};

const ProductsCard = React.lazy(
  () => import('../../components/prducts/ProductsCard')
);
const CommunityList = React.lazy(
  () => import('../../components/community/CommunityList')
);

const Home = () => {
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

  // 커뮤니티 목록 좋아요 순 정렬

  const CommunitySortByLikes = <T extends { likes: number | null }>(
    list: T[]
  ): T[] => {
    return [...list].sort((a, b) => {
      if (a.likes === null && b.likes !== null) {
        return 1;
      } else if (a.likes !== null && b.likes === null) {
        return -1;
      } else {
        return (b.likes || 0) - (a.likes || 0);
      }
    });
  };
  const sortedCommunityResults: Post[] = CommunitySortByLikes(communityItems);

  const bannerImgs = [
    {
      webp1: '/assets/banner1.webp',
      jpg1: '/assets/banner1.jpeg'
    },
    {
      webp2: '/assets/banner2.webp',
      jpg2: '/assets/banner2.jpeg'
    },
    {
      webp3: '/assets/banner3.webp',
      jpg3: '/assets/banner3.jpeg'
    },
    {
      webp4: '/assets/banner4.webp',
      jpg4: '/assets/banner4.jpeg'
    },
    {
      webp5: '/assets/banner5.webp',
      jpg5: '/assets/banner5.jpeg'
    }
  ];

  return (
    <St.HomeContainer>
      <St.BannerContainer>
        {isLoading ? (
          <St.IsLoadingStyle>Loading...</St.IsLoadingStyle>
        ) : (
          <>
            <St.MainBannerpic>
              <source srcSet={bannerImgs[0].webp1} type="image/webp" />
              <img
                style={{ objectFit: 'cover' }}
                src={bannerImgs[0].jpg1}
                alt="메인배너사진"
              />
            </St.MainBannerpic>
            <St.ButtonContainer>
              <St.BannerWrapper>
                <St.ProductsBannerImage>
                  <source srcSet={bannerImgs[1].webp2} type="image/webp" />
                  <img src={bannerImgs[1].jpg2} alt="중고거래" />
                </St.ProductsBannerImage>
                <St.ScrollButton href="#product">
                  <picture>
                    <source srcSet={bannerImgs[2].webp3} type="image/webp" />
                    <St.ButtonImage
                      src={bannerImgs[2].jpg3}
                      alt="중고거래버튼"
                    />
                  </picture>
                </St.ScrollButton>
              </St.BannerWrapper>
              <St.BannerWrapper>
                <St.CommunityBannerImage>
                  <source srcSet={bannerImgs[3].webp4} type="image/webp" />
                  <img src={bannerImgs[3].jpg4} alt="커뮤니티" />
                </St.CommunityBannerImage>
                <St.ScrollButton href="#community">
                  <picture>
                    <source srcSet={bannerImgs[4].webp5} type="image/webp" />
                    <St.ButtonImage
                      src={bannerImgs[4].jpg5}
                      alt="커뮤니티버튼"
                    />
                  </picture>
                </St.ScrollButton>
              </St.BannerWrapper>
            </St.ButtonContainer>
          </>
        )}
      </St.BannerContainer>

      <St.AllCardContainer>
        <St.ContentsContainer id="product">
          <St.TitleWrapper>
            <St.Title>
              {usedItemsCountData?.data?.length}개의 물품이 거래되고 있어요!
            </St.Title>
            <St.ShowLink to="/products">
              전체보기
              <FaArrowRight />
            </St.ShowLink>
          </St.TitleWrapper>
          {/* 하빈 수정 */}
          {isLoading ? null : (
            <Suspense fallback={<ProductsSkeleton count={10} />}>
              <ProductsCard posts={productsPosts} />
            </Suspense>
          )}
        </St.ContentsContainer>

        <St.ContentsContainer id="community">
          <St.TitleWrapper>
            <St.Title>팔레터들의 커뮤니티에 함께해볼까요?</St.Title>
            <St.ShowLink to="/community">
              전체보기
              <FaArrowRight />
            </St.ShowLink>
          </St.TitleWrapper>
          {/* <ComunityWrapper></ComunityWrapper> */}
          {isLoading ? null : (
            <Suspense fallback={<SkeletonCommunityCard cards={6} />}>
              <CommunityList posts={sortedCommunityResults} />
            </Suspense>
          )}
        </St.ContentsContainer>
      </St.AllCardContainer>
    </St.HomeContainer>
  );
};
export default Home;
