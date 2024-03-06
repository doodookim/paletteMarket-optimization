import { FaComment } from '@react-icons/all-files/fa/FaComment';
import { FaThumbsUp } from '@react-icons/all-files/fa/FaThumbsUp';
import styled from 'styled-components';
import { PageBtnProps, Postcolor } from '../../pages/community/api/model';
export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
export const MainImg = styled.div`
  width: 6.6rem;
  height: 6.6rem;

  & img {
    width: 6.6rem;
    height: 6.6rem;
    border-radius: 0.5rem;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    & img {
      width: 4rem;
      height: 4rem;
      border-radius: 0.5rem;
    }
  }
`;
export const ContentsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Posts = styled.li<Postcolor>`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  padding: 3rem;
  max-width: 54.6rem;
  height: 19.5rem;
  gap: 1.6rem;
  border: none;
  /* border-radius: 1rem; */
  justify-content: space-between;
  cursor: pointer;
  background-color: ${(props) => `var(--c-${props.$postcolor}-30)`};
  position: relative;
  &:hover {
    clip-path: polygon(0 0, calc(100% - 3rem) 0, 100% 3rem, 100% 100%, 0 100%);
  }

  &:hover::after {
    content: '';
    position: absolute;
    top: 3rem;
    right: 0px;
    width: 3rem;
    height: 3rem;
    background: ${(props) => `var(--c-${props.$postcolor})`};
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    /* transition: all 10s ease; */
    transform: rotate(90deg);
    transform-origin: 100% 0;
  }
  & h2 {
    font-size: var(--fontSize-H4);
    font-weight: var(--fontWeight-bold);
    margin-bottom: 1.6rem;
    overflow: hidden;
    width: 100%;
    max-width: 40rem;
    height: 2.2rem;
  }
  @media screen and (max-width: 768px) {
    height: 13.3rem;
    padding: 1.5rem;
    max-width: none;
    & h2 {
      font-size: var(--fontSize-H5);
      height: 1.8rem;
    }
  }
`;
export const ContentArea = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  text-overflow: ellipsis;
  /* height: 6.6rem; */
  font-size: var(--fontSize-H5);
  font-weight: var(--fontWeight-medium);
  line-height: 2.2rem;

  @media screen and (max-width: 768px) {
    /* height: 3.8rem; */
    font-size: var(--fontSize-H6);
    -webkit-line-clamp: 2;
  }
`;
export const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--fontSize-H6);
  /* color: var(--6-gray); */
  font-weight: var(--fontWeight-medium);
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const CommentArea = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 0.6rem;
  /* color: var(--8-gray); */
  & img {
    margin-top: 0.3rem;
  }
`;
export const CommentIcon = styled(FaComment)<Postcolor>`
  color: ${(props) => `var(--c-${props.$postcolor})`};

  /* opacity: 50%; */
  transform: scaleX(-1);
`;
export const LikesIcon = styled(FaThumbsUp)<Postcolor>`
  color: ${(props) => `var(--c-${props.$postcolor})`};
  /* opacity: 50%; */
`;
export const Title = styled.h2`
  font-size: 2.4rem;
`;
export const PageNumber = styled.div`
  text-align: center;
  margin-top: 9.2rem;
  display: flex;
  justify-content: center;
  gap: 5rem;
  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;
export const PageBtn = styled.button<PageBtnProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) =>
    props.$currentPage === props.$pageNumber ? 'var(--opc-100)' : '#f8f8f8'};
`;
