import { FaCheckSquare } from '@react-icons/all-files/fa/FaCheckSquare';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const SearchResultsContainer = styled.div`
  display: flex;
  max-width: 144rem;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
`;

export const SearchResultsCountContainer = styled.div`
  margin: 0 auto;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;
export const Icon = styled(FaCheckSquare)`
  margin: 0 auto;
  width: 6.6rem;
  height: 6.6rem;
  color: var(--opc-100);
  @media screen and (max-width: 768px) {
    width: 4.4rem;
    height: 4.4rem;
  }
`;
export const FullCounts = styled.div`
  margin-top: 2rem;
  font-size: var(--fontSize-H1);
  font-weight: var(--fontWeight-bold);
  @media screen and (max-width: 768px) {
    font-size: var(--fontSize-H4);
  }
`;
export const ResultListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 8rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const ProductsProtecter = styled.div`
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const UsedItemResultsContainer = styled.div`
  margin-top: 2rem;
  width: 77.5%;
  margin: 0 auto;
  margin-bottom: 4rem;
  @media screen and (max-width: 768px) {
    width: 93%;
    min-width: 32rem;
    margin-top: 2rem;
  }
`;
export const CountBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;
export const CountPost = styled.div`
  display: flex;
  width: 100%;
  font-size: var(--fontSize-H3);
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 1rem;
    font-size: var(--fontSize-H5);
  }
`;

export const ProductsCount = styled.h1<{
  showClickedList: boolean;
}>`
  width: 40%;
  cursor: pointer;
  font-weight: ${({ showClickedList }) =>
    !showClickedList ? 'var(--fontWeight-bold)' : 'var(--fontWeight-medium)'};
  color: ${({ showClickedList }) =>
    !showClickedList ? 'var(--opc-100)' : 'var(--black)'};
`;
export const CommunityCount = styled.h1<{
  showClickedList: boolean;
}>`
  width: 40%;
  cursor: pointer;
  font-weight: ${({ showClickedList }) =>
    showClickedList ? 'var(--fontWeight-bold)' : 'var(--fontWeight-medium)'};
  color: ${({ showClickedList }) =>
    showClickedList ? 'var(--opc-100)' : 'var(--black)'};
`;

export const WebDropdown = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
`;

export const CountList = styled.h1`
  display: flex;
  font-size: var(--fontSize-H3);
  font-weight: var(--fontWeight-bold);

  align-items: center;
  @media screen and (max-width: 768px) {
    font-size: var(--fontSize-H5);
  }
`;

export const LinktoUsedProducts = styled.div`
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
  @media screen and (max-width: 768px) {
    background: none;
    width: 6rem;
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
export const UsedItemsList = styled.ul<{
  usedItemCount: number;
  showClickedList: boolean;
}>`
  width: 100%;

  max-height: 100vh;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 2rem;
  row-gap: 1.5rem;
  column-gap: 1.8rem;
  align-items: flex-start;
  justify-content: center;
  place-items: center;
  margin-top: 2rem;

  @media screen and (max-width: 1160px) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: ${({ usedItemCount }) =>
      usedItemCount !== 0 ? '5rem' : '2rem'};
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: ${({ usedItemCount }) => (usedItemCount !== 0 ? '5rem' : '')};
  }

  @media screen and (max-width: 768px) {
    column-gap: 1.5rem;
    row-gap: 1.8rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: ${({ usedItemCount }) => (usedItemCount !== 0 ? '3rem' : '')};
  }
  @media screen and (max-width: 670px) {
    column-gap: 1.5rem;
    row-gap: 1.8rem;
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${({ usedItemCount }) => (usedItemCount !== 0 ? '2rem' : '')};
  }
  @media screen and (max-width: 520px) {
    row-gap: 1.8rem;
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${({ usedItemCount }) => (usedItemCount !== 0 ? '2rem' : '')};
  }

  @media screen and (max-width: 349px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: ${({ usedItemCount }) => (usedItemCount !== 0 ? '2rem' : '')};
  }
`;
export const ToProductsPage = styled.div`
  text-decoration: none;
  cursor: pointer;
`;
export const ProductList = styled.li`
  width: 20.8rem;
  /* height: 31.5rem; */
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 520px) {
    width: 100%;
  }
  div {
    width: 20.8rem;
    height: 20.8rem;
    object-fit: cover;
    justify-content: center;
    border-radius: 0.6rem;
    @media screen and (max-width: 768px) {
      width: 14rem;
      height: 14rem;
      margin-bottom: 1rem;
    }
  }

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    border-radius: 0.6rem;
    border-style: none;
    @media screen and (max-width: 768px) {
      width: 14rem;
      height: 14rem;
      border-radius: 0.6rem;
    }
  }

  h3 {
    font-size: var(--fontSize-body);
    color: var(--11-gray);
    margin-top: 1rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    height: 2.5rem;
    white-space: wrap;
    text-overflow: ellipsis;
    line-height: 1.5;
    @media screen and (max-width: 768px) {
      width: 14rem;
      height: 2rem;
      margin-top: 0.6rem;
      color: var(--11-gray, #f8f8f8);
      font-weight: var(--fontWeight-medium);
      font-size: var(--fontSize-H5);
    }
  }

  p {
    font-size: var(--fontSize-body);
    font-weight: var(--fontWeight-bold);
    color: var(--11-gray);
    margin-top: 1rem;
    text-align: left;
    @media screen and (max-width: 768px) {
      height: 2.3rem;
      font-weight: var(--fontWeight-bold);
      font-size: var(--fontSize-H5);
    }
  }
`;

interface QualityProps {
  $quality: string;
}

export const ProductsCardQuality = styled.h1<QualityProps>`
  width: 9rem;
  padding: 0 0.8rem;
  text-align: center;
  line-height: 1.7;
  border-radius: 0.3rem;
  margin-top: 1rem;
  background-color: #fcfcfc;

  color: var(--2-gray);
  margin-bottom: 0.6rem;
  font-size: var(--fontSize-H6);
  // 배경색 조건부 렌더링
  ${(props) => {
    if (props.children === '새상품(미사용)') {
      return css`
        background-color: var(--opc-100);
        color: var(--2-gray);
      `;
    }
    if (props.children === '고장/파손 상품') {
      return css`
        background-color: var(--4-gray);
        color: var(--11-gray);
      `;
    }
  }}
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    width: 8rem;
    height: 2rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 191.2%;
    text-align: center;
  }
`;

export const CommunityResultsContainer = styled.div<{
  showClickedList: boolean;
}>`
  width: 77.5%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 5rem;
  @media screen and (max-width: 768px) {
    width: 93%;
    margin-top: ${({ showClickedList }) => (showClickedList ? 0 : '2rem')};
    padding: 0 1rem;
  }
  @media screen and (max-width: 530px) {
    width: 100%;
    padding: 0 1rem;
    margin-top: ${({ showClickedList }) => (showClickedList ? 0 : '2rem')};
  }
  @media screen and (max-width: 349px) {
    width: 100%;
    margin-top: ${({ showClickedList }) => (showClickedList ? 0 : '2rem')};
    padding: 0 1rem;
  }
`;
export const CommunityTitle = styled.div<{
  showClickedList: boolean;
}>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 2.2rem;
  @media screen and (max-width: 768px) {
    display: none;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 530px) {
    display: none;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 349px) {
    display: none;
    margin-bottom: 1rem;
  }
`;
export const LinktoCommunityPosts = styled.div`
  text-decoration: none;
  cursor: pointer;
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
export const CommunityPostsList = styled.ul`
  width: 100%;
  margin-top: 2.2rem;
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    /* margin-top */
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;
export const ToCommunityPage = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: var(--11-gray);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const PostList = styled.li`
  width: 54.6rem;
  height: 19.5rem;
  display: inline-block;
  position: relative;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--3-gray);
  padding: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
  @media screen and (max-width: 520px) {
    width: 100%;
    padding: 1rem;
  }
  .nopicture {
    width: 6.6rem;
    height: 6.6rem;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      width: 4rem;
      height: 4rem;
    }
  }
  .commupic {
    display: flex;
    gap: 1.2rem;
    @media screen and (max-width: 768px) {
    }
  }
  .commucontent {
    /* margin-left: 1.5rem; */
    /* margin-bottom: 3rem; */
    /* gap: 10px; */
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
    font-size: var(--fontSize-H4);
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

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    font-size: var(--fontSize-H4);
    font-weight: var(--fontWeight-medium);
    color: var(--8-gray);
    height: 6.6rem;
    line-height: 1.2;

    @media screen and (max-width: 768px) {
      font-size: var(--fontSize-H6);
      -webkit-line-clamp: 2;
      line-height: 1.92;
      height: 4rem;
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
