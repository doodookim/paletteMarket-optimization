import React, { MouseEvent } from 'react';
import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight';
import ProductsCard from '../../../prducts/ProductsCard';
import { Product } from '../../../../pages/productsDetail/types';
import { useNavigate, useParams } from 'react-router';
import {
  StOtherPostsTitleWrapper,
  StSimilarProductTitleWrapper,
  StToSectionButton
} from './RecommendStyle';

type RecommendProps = {
  product: Product[];
  similar: Product[];
  otherPosts: Product[];
};

const Recommend = ({ product, similar, otherPosts }: RecommendProps) => {
  const navi = useNavigate();
  const { id } = useParams();
  // 상품추천란 네비게이션 함수
  const navigateTo = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    if (id && id === product![0].post_user_uid) navi(`/postersProducts/${id}`);
    else navi('/products');
  };

  return (
    <>
      <div>
        <StSimilarProductTitleWrapper>비슷한 상품</StSimilarProductTitleWrapper>
        <ProductsCard
          posts={similar
            .filter((product) => product.isSell !== true && product.id !== id)
            .slice(0, 5)}
        />
      </div>
      <div>
        <StOtherPostsTitleWrapper>
          이 판매자의 다른 상품
          <StToSectionButton id={product[0].post_user_uid} onClick={navigateTo}>
            전체보기 <FaArrowRight />
          </StToSectionButton>
        </StOtherPostsTitleWrapper>
        <ProductsCard
          posts={otherPosts
            .filter((product) => product.isSell !== true)
            .slice(0, 5)}
        />
      </div>
    </>
  );
};

export default Recommend;
