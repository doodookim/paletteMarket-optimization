import { GoChevronLeft } from '@react-icons/all-files/go/GoChevronLeft';
import styled from 'styled-components';
import { StFadeAni } from '../../../pages/productsDetail/style';

export const EntireContainer = styled.div`
  max-width: 144rem;
  display: flex;
  margin: auto;
  animation: ${StFadeAni} 0.3s ease;
  @media screen and (max-width: 768px) {
    max-width: 76.8rem;
    margin-top: 1.5rem;
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
  flex-direction: row;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    max-width: 76.8rem;
    margin-top: 0.6rem;
    margin-bottom: 0.8rem;
  }
`;
export const BackBtnBox = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 2rem;
    height: 2rem;
    :hover {
      cursor: pointer;
    }
  }
`;
export const BackIcon = styled(GoChevronLeft)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 70%;
    height: 100%;
    color: var(--opc-100);
  }
`;
export const Title = styled.h1`
  font-size: var(--fontSize-H1);
  margin-right: 1.7rem;
  font-weight: var(--fontWeight-bold);
  @media screen and (max-width: 768px) {
    font-size: var(--fontSize-H4);
    margin-right: 1rem;
  }
`;
export const TetleRequired = styled.p`
  color: var(--opc-100);
  font-size: var(--fontSize-H6);
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    //font-size: 1rem;
    line-height: 1.5;
  }
`;
export const Hr = styled.hr`
  width: 100%;
  height: 0.01rem;
  border: none;
  background-color: var(--gray);
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
