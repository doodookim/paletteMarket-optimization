import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as St from '../../styles/searchresults/SearchResultsStyle';
import { setSearchResults } from '../../redux/modules/searchSlice';
import { FaArrowDown } from '@react-icons/all-files/fa/FaArrowDown';
import { FiArrowUp } from '@react-icons/all-files/fi/FiArrowUp';
import { researchItems, ResearchResults } from './researchItem';
import Dropdown from '../../styles/searchresults/Dropdown';
import CommunityList from '../../components/community/CommunityList';
import { RootState } from '../../redux/store/store';
import ProductsCard from '../../components/prducts/ProductsCard';
import SkeletonCommunityCard from '../../components/skeleton/SkeletonCommunityCard';
import ProductsSkeleton from '../../components/skeleton/ProductsSkeleton';

interface ListCount {
  usedItemCount: number;
  communityCount: number;
}

type CommonItemProps = {
  id: number;
  image_url: string[]; // 이미지 배열로 가정
  quality: string;
  title: string;
  price: number;
};

const SearchResults: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [communityOpen, setCommunityOpen] = useState<boolean>(false);
  const [showClickedList, setShowClickedList] = useState<boolean>(false);
  const { usedItemResults, communityResults } = useSelector(
    (state: RootState) => state.search.searchResults
  );
  const handleTabClick = (tab: string) => {
    if (tab === '중고물품') {
      setShowClickedList(false);
    } else if (tab === '커뮤니티') {
      setShowClickedList(true);
    }
  };
  const dispatch = useDispatch();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clickMenu, setClickMenu] = useState('최신순');
  const [selectedTab, setSelectedTab] = useState<'중고물품' | '커뮤니티'>(
    '중고물품'
  );
  const [communityMenu, setCommunityMenu] = useState('최신순');
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showAllCommunity, setShowAllCommunity] = useState(false);

  const handleToggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };
  const handleToggleShowAllCommunity = () => {
    setShowAllCommunity(!showAllCommunity);
  };

  const naviagate = useNavigate();

  const handleProductsSort = (sort: '최신순' | '인기순') => {
    setClickMenu(sort);
  };

  const newSearchQuery = new URLSearchParams(location.search).get('q') || '';

  const checkWindowSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // 정렬 함수
  const ProductsSortByLikes = <T extends { likes: number }>(list: T[]): T[] => {
    return [...list].sort((a, b) => b.likes - a.likes);
  };

  const CommunitySortByLikes = useCallback(
    <T extends { likes: number | null }>(list: T[]): T[] => {
      return [...list].sort((a, b) => {
        if (a.likes === null && b.likes !== null) {
          return 1;
        } else if (a.likes !== null && b.likes === null) {
          return -1;
        } else {
          return (b.likes || 0) - (a.likes || 0);
        }
      });
    },
    []
  );

  // 정렬된 결과
  const sortedUsedItemResults =
    clickMenu === '인기순'
      ? ProductsSortByLikes(usedItemResults)
      : usedItemResults;

  const sortedMobileCommunityResults =
    clickMenu === '인기순'
      ? CommunitySortByLikes(communityResults)
      : communityResults;

  const sortedCommunityResults =
    communityMenu === '인기순'
      ? CommunitySortByLikes(communityResults)
      : communityResults;
  useEffect(() => {
    // 데이터의 개수가 5개 이하이면 showAllData를 false로 설정
    if (usedItemResults.length <= 5) {
      setShowAllProducts(false);
    }
  }, [usedItemResults]);
  useEffect(() => {
    checkWindowSize();
    window.removeEventListener('DOMContentLoaded', checkWindowSize);
    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('DOMContentLoaded', checkWindowSize);
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (!newSearchQuery.trim()) {
        return;
      }
      setIsLoading(true);
      const results: ResearchResults | undefined = await researchItems(
        newSearchQuery
      );
      if (!results) {
        console.error('수파베이스에 요청 중 실패:');
        return;
      }

      const { usedItemsWithImages, communityItemsWithImages } = results;

      dispatch(
        setSearchResults({
          usedItemResults: usedItemsWithImages || [],
          communityResults: communityItemsWithImages || []
        })
      );
      setIsLoading(false);
    }

    fetchData();
  }, [newSearchQuery, dispatch]);

  const usedItemCount = usedItemResults.length;
  const communityCount = communityResults.length;

  useEffect(() => {
    // 768px 이하에서 최초 렌더링 시에는 ProductsCount가 디폴트
    if (window.innerWidth <= 768) {
      if (usedItemCount === 0 && communityCount !== 0) {
        setSelectedTab('커뮤니티');
      } else {
        setSelectedTab('중고물품');
      }
    }
  }, [usedItemCount, communityCount]);

  const handleText = useCallback((content: string): string => {
    const textOnly = content.replace(/<[^>]*>|&nbsp;/g, ' ');
    return textOnly;
  }, []);
  const slicedCommunityResults = sortedCommunityResults.slice(
    0,
    showAllCommunity ? sortedCommunityResults.length : 6
  );

  // productsCard map 돌리기 위한 변수 선언(하빈 추가)
  const productsData = sortedUsedItemResults?.slice(
    0,
    showAllProducts ? sortedUsedItemResults.length : 5
  );

  return (
    <>
      <St.SearchResultsContainer>
        <St.SearchResultsCountContainer>
          <St.Icon />
          <St.FullCounts>
            {isLoading
              ? '검색 중...'
              : usedItemCount === 0 && communityCount === 0
              ? '해당 검색어에 대한 결과를 찾을 수 없어요'
              : `${usedItemCount + communityCount}개의 결과가 검색되었어요`}
          </St.FullCounts>
        </St.SearchResultsCountContainer>
        <St.ResultListContainer>
          <St.UsedItemResultsContainer>
            {/* TAB */}
            {isMobile ? (
              <St.CountBar>
                <St.CountPost>
                  <St.ProductsCount
                    showClickedList={showClickedList}
                    onClick={() => handleTabClick('중고물품')}
                  >
                    중고거래({usedItemCount})
                  </St.ProductsCount>
                  <St.CommunityCount
                    showClickedList={showClickedList}
                    onClick={() => {
                      handleTabClick('커뮤니티');
                    }}
                  >
                    커뮤니티({communityCount})
                  </St.CommunityCount>
                </St.CountPost>
                <Dropdown
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  clickMenu={clickMenu}
                  setClickMenu={setClickMenu}
                />
              </St.CountBar>
            ) : (
              // 데스크탑
              <St.CountBar>
                <St.CountList>
                  {usedItemCount}개의 상품이 거래되고 있어요
                </St.CountList>
                <St.WebDropdown>
                  <Dropdown
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    clickMenu={clickMenu}
                    setClickMenu={setClickMenu}
                  />

                  <St.LinktoUsedProducts
                    onClick={handleToggleShowAllProducts}
                    style={{
                      display:
                        usedItemResults.length <= 5 && !showAllProducts
                          ? 'none'
                          : 'flex'
                    }}
                  >
                    {showAllProducts ? <p>숨기기</p> : <p>더보기</p>}

                    {showAllProducts ? <FiArrowUp /> : <FaArrowDown />}
                  </St.LinktoUsedProducts>
                </St.WebDropdown>
              </St.CountBar>
            )}
            {/* 검색 결과 */}
            {isMobile && !showClickedList && (
              <ProductsCard posts={sortedUsedItemResults} />
            )}{' '}
            {!isMobile && (
              // 중고 데스크탑
              <St.ProductsProtecter>
                {/* productsCard 컴포넌트 props넘기기 */}

                {isLoading ? (
                  <ProductsSkeleton count={5} />
                ) : (
                  <ProductsCard posts={productsData} />
                )}
              </St.ProductsProtecter>
            )}
          </St.UsedItemResultsContainer>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* 커뮤니티 */}
          <St.CommunityResultsContainer showClickedList={showClickedList}>
            <St.CommunityTitle showClickedList={showClickedList}>
              <St.CountList>{communityCount}개의 이야기가 있어요</St.CountList>
              <St.WebDropdown>
                <Dropdown
                  isOpen={communityOpen}
                  setIsOpen={setCommunityOpen}
                  clickMenu={communityMenu}
                  setClickMenu={setCommunityMenu}
                />

                <St.LinktoCommunityPosts
                  onClick={handleToggleShowAllCommunity}
                  style={{
                    display: communityResults.length <= 6 ? 'none' : 'flex'
                  }}
                >
                  {showAllCommunity ? <p>숨기기</p> : <p>더보기</p>}

                  {showAllCommunity ? <FiArrowUp /> : <FaArrowDown />}
                </St.LinktoCommunityPosts>
              </St.WebDropdown>
            </St.CommunityTitle>
            {/* 커뮤니티 모바일 */}
            {isMobile && showClickedList && (
              <CommunityList posts={sortedMobileCommunityResults} />
            )}
            {!isMobile &&
              (isLoading ? (
                // 커뮤니티 데스크탑
                <SkeletonCommunityCard cards={6} />
              ) : (
                <CommunityList posts={slicedCommunityResults} />
              ))}
          </St.CommunityResultsContainer>
        </St.ResultListContainer>
      </St.SearchResultsContainer>
    </>
  );
};

export default SearchResults;
