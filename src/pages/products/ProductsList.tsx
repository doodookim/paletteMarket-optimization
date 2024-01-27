import { useQuery } from 'react-query'
import { MouseEvent, useEffect, useState } from 'react';
import ProductListCard from '../../components/prducts/ProductsList/ProductsListCard';
import ProductsSearchBar from '../../components/prducts/ProductsList/ProductsSearchBar';
import ProductsSortBtn from '../../components/prducts/ProductsList/ProductsSortBtn';
import * as St from '../../styles/products/ProductsListStyle';
import { useNavigate } from 'react-router';
import { fetchRangeProductsPosts, getProductsCount, getProductsPosts } from '../../components/prducts/productsQuery';
import Pagination from './Pagination';

const major = ['전체', '회화', '조소', '판화', '금속공예', '도예', '유리공예', '목공예', '섬유공예', '기타']
const PAGE_POST_NUMBER = 25;

const ProductsList = () => {

  const navigate = useNavigate();

  const [selectCategory, setSelectCategory] = useState<string[]>(['전체']);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalProductsPosts, setTotalProductsPosts] = useState()

  // const {
  //   data: productsPosts, isLoading, isError
  // } = useQuery(['productsPosts', currentPage], () => fetchRangeProductsPosts(currentPage, selectCategory),{
  //   onSuccess: (data) => {
  //     if (data.count) {
  //       setTotalPages(Math.ceil(data.count / PAGE_POST_NUMBER))
  //       setTotalCount(data.count)
  //     }
  //   }
  // });
  const { data: productsCount, isLoading, isError } = useQuery(['productsCount'], getProductsCount, {
    staleTime: 60000,
    onSuccess: (productsCount) => {
    // 여기서 selectCategory를 이용한 작업을 수행
    console.log('Data fetched successfully', productsCount);
  },
  })

  if (isLoading) {
    return <St.LoadingStyle>Loading...</St.LoadingStyle>;
  }

  if (isError) {
    return <St.LoadingStyle>정보를 가져올 수 없습니다. 다시 시도해주세요.</St.LoadingStyle>
  }

  // const posts = productsPosts?.data;
  // const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleOnClickCategory = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    setSelectCategory([target.innerText || '']);
  }



  return ( 
    <St.EntireContainer>
      <St.ContentsContainer>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <St.Title>
          {`${productsCount}개의 물품이 거래되고 있어요`}
        </St.Title>
        <St.MobilePostsWriteBtn onClick={() => navigate('/productsposts')}>
          <St.SellWriteIcon/> 판매하기
        </St.MobilePostsWriteBtn>
      </div>
      <St.BarContainer>
        <St.CategoryContainer>
          <St.CategoryWrapper>
            {major.map(major => 
              <li>
                <St.Category key={major} onClick={handleOnClickCategory}
                  $selectCategory={selectCategory}
                  >{major}</St.Category>
              </li>
            )}
          </St.CategoryWrapper>
          <St.PostsWriteBtn onClick={() => navigate('/productsposts')}>
            <St.SellWriteIcon/> 판매하기
          </St.PostsWriteBtn>
        </St.CategoryContainer>
        {/* <St.SearchBarContainer>
          <ProductsSearchBar />
          <ProductsSortBtn />
        </St.SearchBarContainer> */}
      </St.BarContainer>
      <ProductListCard selectCategory={selectCategory} />
      </St.ContentsContainer>
    </St.EntireContainer>
  );
};

export default ProductsList;
