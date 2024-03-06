import React, { useState } from 'react';
import { IoIosArrowDropupCircle } from '@react-icons/all-files/io/IoIosArrowDropupCircle';
import styled from 'styled-components';

const ScrollTopButton = () => {
  const [smallscreen, setSmallScreen] = useState(window.innerWidth <= 768);
  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 768);
  };
  // 화면 크기가 변할 때마다 handleResize 함수 호출
  window.addEventListener('resize', handleResize);
  // 컴포넌트가 언마운트되면 이벤트 리스너 제거
  React.useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <TopButton onClick={scrollToTop} />;
};

const TopButton = styled(IoIosArrowDropupCircle)`
  position: fixed;
  bottom: 6%;
  right: 2.6%;
  padding: 10px;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: opacity 0.5s;
  color: var(--opc-80);
  width: 8rem;
  height: 8rem;
  &:hover {
    color: var(--opc-100);
  }
  @media screen and (max-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
    padding: 0;
    right: 3%;
  }
`;
const TopButton2 = styled.button`
  position: fixed;
  bottom: 6%;
  right: 3%;
  padding: 10px;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: opacity 0.5s;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    padding: 0;
    right: 3%;
  }

  img {
    width: 50px;
    height: 50px;
    @media screen and (max-width: 768px) {
      max-width: 30px;
      max-height: 30px;
      width: 100%;
      height: 33%;
    }
  }

  &:hover {
    opacity: 0.8;
    @media screen and (max-width: 320px) {
      opacity: 0.5;
    }
  }
`;

export default ScrollTopButton;
