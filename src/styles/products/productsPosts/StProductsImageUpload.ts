import styled from 'styled-components';
import { CgCloseO } from '@react-icons/all-files/cg/CgCloseO';

export const UpLoadImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  gap: 3.2rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 1.6rem;
    flex-direction: column;
    gap: 0rem;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;
export const ImageCard = styled.div`
  border-radius: 0.5rem;
  width: 18.5rem;
  height: 18.5rem;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 11rem;
    height: 11rem;
  }
  @media screen and (max-width: 400px) {
    width: 9rem;
    height: 9rem;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;
export const ImageOrderWrapper = styled.div`
  border: 0.15rem solid var(--opc-100);
  width: 18.5rem;
  height: 18.5rem;
  border-radius: 0.5rem;
  padding: 1.2rem 0 0 1.2rem;
  position: absolute;
  z-index: 1;
  @media screen and (max-width: 768px) {
    width: 11rem;
    height: 11rem;
    padding: 0.6rem 0 0 0.6rem;
  }
  @media screen and (max-width: 400px) {
    width: 9rem;
    height: 9rem;
  }
`;
interface Props {
  $idx: number;
}
export const ImageOrder = styled.div<Props>`
  width: 4.9rem;
  height: 1.9rem;
  border-radius: 0.4rem;
  background-color: ${(props) =>
    props.$idx === 0 ? 'var(--opc-100)' : 'var(--gray)'};
  color: var(--white);
  text-align: center;
  line-height: 2;
  font-size: 1rem;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 3.5rem;
    height: 1.2rem;
    border-radius: 0.3rem;
    line-height: 1.8;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 400px) {
    width: 2.4rem;
    height: 0.9rem;
    border-radius: 0.3rem;
    line-height: 1.7;
    font-size: 0.6rem;
  }
`;
export const ImgCount = styled.span`
  height: 100%;
  margin-left: 2rem;
  color: var(--gray);
  font-size: var(--fontSize-H6);
  line-height: 2.5;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 2;
    margin-left: 0.6rem;
  }
`;
export const ImageDeleteBtn = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  position: absolute;
  z-index: 2;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const ImageDeleteIcon = styled(CgCloseO)`
  width: 100%;
  height: 100%;
  color: var(--gray);
  position: absolute;
`;
export const ImageOrderBtn = styled.div`
  margin: 1.2rem 0 0 1.2rem;
  left: 0;
  width: 4.9rem;
  height: 1.9rem;
  border-radius: 100%;
  position: absolute;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 3.5rem;
    height: 1.2rem;
    margin: 0.8rem 0 0 0.8rem;
  }
`;
export const UpLoadBox = styled.label`
  width: 18.5rem;
  height: 18.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--opc-20);
  background-color: var(--opc-10);
  color: var(--opc-100);
  font-size: 5rem;
  text-align: center;
  line-height: 3.7;
  position: relative;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 11rem;
    height: 11rem;
    font-size: 2rem;
    line-height: 5.5;
  }
  @media screen and (max-width: 400px) {
    width: 9rem;
    height: 9rem;
    font-size: 2rem;
    line-height: 4.5;
  }
`;
export const UpLoadExplanation = styled.p`
  font-size: var(--fontSize-H5);
  color: var(--gray);
  line-height: 1.5;
  margin: 0.7rem 0 0 19rem;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    gap: 0.4rem;
    line-height: 1.3;
    margin: 0.7rem 0 0 1rem;
  }
`;
