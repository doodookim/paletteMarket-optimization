import { BiWon } from '@react-icons/all-files/bi/BiWon';
import styled from 'styled-components';
import { StFadeAni } from '../../../pages/productsDetail/style';

// ProductsList(page)
export const EntireContainer = styled.div`
  max-width: 144rem;
  display: flex;
  margin: auto;
  animation: ${StFadeAni} 0.3s ease;
  @media screen and (max-width: 768px) {
    max-width: 76.8rem;
    //min-width: 30rem;
    padding: 0;
  }
`;

export const ContentsContainer = styled.div`
  width: 77.5%;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 93%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 0 2rem 0;
  @media screen and (max-width: 768px) {
    margin: 1.5rem 0 1rem 0;
  }
`;

export const Title = styled.h1`
  font-size: var(--fontSize-H3);
  font-weight: var(--fontWeight-bold);
  @media screen and (max-width: 768px) {
    font-size: var(--fontSize-body);
  }
`;

export const SellWriteIcon = styled(BiWon)`
  color: var(--opc-100);
  width: 2rem;
  height: 2rem;
  @media screen and (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const PostsWriteBtn = styled.div`
  width: 10rem;
  height: 3.5rem;
  line-height: 1.8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  gap: 0.5rem;
  font-size: var(--fontSize-H5);
  font-weight: var(--fontWeight-bold);
  background-color: var(--opc-20);
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    background-color: var(--opc-100);
    color: var(--white);
    ${SellWriteIcon} {
      color: var(--white);
    }
  }
  @media screen and (max-width: 768px) {
    width: 8rem;
    height: 2.5rem;
    gap: 0.5rem;
    font-size: var(--fontSize-H6);
  }
`;

export const BarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SortBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 1.6rem;
  }
`;

// ProductsSortBtn
// 목록 정렬바 스타일링 해야함

export const LoadingStyle = styled.div`
  margin: 5rem auto;
  text-align: center;
  font-size: var(--fontSize-H3);
  @media screen and (max-width: 768px) {
    margin: 3rem auto;
    font-size: var(--fontSize-H5);
  }
`;

export const LastData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7rem auto 0 auto;
  gap: 2rem;
  font-weight: var(--fontWeight-bold);
  @media screen and (max-width: 768px) {
    margin: 3rem auto 0 auto;
    gap: 1rem;
  }
`;
