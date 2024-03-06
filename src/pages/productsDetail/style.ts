import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { AiFillAlert } from '@react-icons/all-files/ai/AiFillAlert';
import styled, { css, keyframes } from 'styled-components';

export const StFadeAni = keyframes`
  from{
    opacity: 0;
    transform: translateX(-5%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const StDetailContainer = styled.div`
  width: 77.5%;
  height: 100%;
  max-width: 1116px;
  margin: auto;
  animation: ${StFadeAni} 0.3s ease;

  @media screen and (max-width: 768px) {
    width: 97%;
    max-width: 768px;
    padding: 0;
  }
`;

const StDetailInfoSection = styled.section`
  width: 100%;
  max-width: 1116px;
  margin: auto;
  height: fit-content;
  display: flex;
  gap: 4.6rem;
  align-items: start;
  justify-content: center;
  border-bottom: 0.1rem solid #5a5a5a;
  margin-bottom: 4rem;
  padding-bottom: 4rem;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 768px;
    margin-bottom: 0.5rem;
  }
`;

const StImageWrapper = styled.div`
  width: 100%;
  max-width: 43rem;
  height: 43rem;
  max-height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background-color: aliceblue;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 768px;
    height: 100%;
    max-height: 43.5rem;
    margin-bottom: 1.5rem;
  }
`;

const StProductInfo = styled.div`
  width: 100%;
  max-width: 640px;
`;

const StProductInfoHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;
const StUserTitlebox = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StUserImage = styled.div`
  width: fit-content;
`;

type ImageProps = {
  $url: string | undefined;
};

const StProfileImages = styled.div<ImageProps>`
  width: 22px;
  height: 22px;
  background: ${(props) => (props.$url ? css`url(${props.$url})` : '#d9d9d9')};
  background-size: cover;
  border-radius: 50%;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

const StUserNickname = styled.h4`
  color: var(--7, #878787);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 191.2%; /* 26.768px */
  @media screen and (max-width: 768px) {
    width: 100px;
    white-space: nowrap;
  }
`;

const StAlertButton = styled.button`
  width: fit-content;
  background-color: transparent;
  color: var(--6, #717171);
  border: none;
  font-weight: var(--fontWeight-semiBold);
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    gap: 1.2rem;

    p {
      font-size: 1.2rem;
    }
  }
`;

const StAlertIcon = styled(AiFillAlert)`
  font-size: 1.4rem;
  color: #13b3bc;
`;

const StHeaderTitle = styled.div`
  width: 100%;
  margin-block: 1.5rem;
  font-size: var(--fontSize-H2);

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    padding: 0rem 1.5rem;
    margin-block: 0.3rem;
  }
`;
const StHeaderPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--fontSize-H2);

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    font-size: 1.4rem;
    margin-block: 0.6rem;
  }
`;
const StPrice = styled.h3``;
const StTimeLeft = styled.div`
  max-width: 20%;
  font-size: var(--fontSize-H5);
  color: var(--6-gray);
  font-weight: var(--fontWeight-medium);

  @media screen and (max-width: 768px) {
    max-width: 30%;
    font-size: 1.2rem;
  }
`;

const StProductInfoBody = styled.div`
  width: 100%;
  height: 100%;
  max-width: 640rem;
  max-height: 318rem;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--opc-20);
  color: black;
  border-radius: 1rem;
  margin-block: 1.6rem;

  @media screen and (max-width: 768px) {
    width: 94%;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem 1.5rem;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  gap: 1.4rem;
  margin-block: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem 1.5rem;
    margin-block: 0.1rem;
  }
`;

type ButtonProps = {
  $role: string;
};

const Button = styled.div<ButtonProps>`
  width: 100%;
  max-width: ${(props) => (props.$role === 'like' ? '7.1rem' : '100%')};
  height: 6.8rem;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$role === 'like' ? 'var(--opc-20)' : 'var(--opc-100)'};
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  ${(props) => {
    if (props.$role === 'sold-out') {
      return css`
        background-color: #eee;
        color: black;
      `;
    }
  }}

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    font-size: 1.2rem;
  }

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    color: white;
    font-weight: var(--fontWeight-500);
    ${(props) => {
      if (props.$role === 'sold-out') {
        return css`
          color: black;
        `;
      }
    }}
  }
  &:hover {
    h3,
    p {
      color: black;
    }
    background-color: var(--opc-100);

    ${(props) => {
      if (props.$role === 'sold-out') {
        return css`
          color: var(--opc-100);
        `;
      }
    }}
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 1.4rem;
    }

    max-width: ${(props) => (props.$role === 'like' ? '7.1rem' : '100%')};
  }
`;

const FaHeartIcon = styled(FaHeart)`
  margin-block: 0.4rem;
  font-size: 2rem;
`;

// 상품 설명 섹션
const StProductIntroSection = styled.section`
  width: 100%;
  max-width: 111.6rem;
  line-height: 3.1rem;
  padding: 0 1.5rem;
  color: var(--8-gray);
  margin: auto;
  border-bottom: 0.1rem solid #5a5a5a;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0.3rem 1.5rem;
  }
`;
const StProductIntroTitle = styled.h4`
  width: 100%;
  margin-block: 1.6rem;
  font-size: 2.2rem;
  font-weight: var(--fontWeight-semiBold);
  color: var(--12-gray);
`;
const StProductContent = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 1.6rem;
  white-space: break-spaces;
`;
const StProductCategory = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-block: 4rem;
`;
const StCategoryTag = styled.li`
  width: fit-content;
  font-size: 1.6rem;
  font-weight: 600;
  color: gray;
  list-style: none;
  border-radius: 6px;
`;

const StSelectChatBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1d1d1d90;
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: fixed;
  }
`;

const StChatList = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36rem;
  height: 25rem;
  background: #eee;
  color: var(--opc-100);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    position: absolute;
  }
`;

const StChatListItem = styled.div`
  padding: 1rem;
  border-bottom: 0.1px solid var(--opc-100);
  cursor: pointer;

  &:hover {
    color: white;
    background-color: var(--opc-100);
  }
`;

const StConfirmSellBtn = styled.button`
  position: absolute;
  bottom: 0;
  padding: 1rem;
  width: 95%;
  margin: auto;
  background-color: transparent;
  border: none;
  outline: none;
  background-color: var(--opc-80);
  border-radius: 0.8rem;
  margin-block: 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--opc-100);
    color: white;
  }

  span {
    font-size: 2rem;
    font-weight: 600;
  }
`;

// chat List
const StNoListText = styled.h1`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StSellTitle = styled.h1`
  text-align: center;
  font-weight: 500;
  margin-block: 1rem;
  color: black;
  letter-spacing: 0.1rem;
`;

export {
  StDetailContainer,
  StDetailInfoSection,
  StImageWrapper,
  StProductInfo,
  StProductInfoHeader,
  StUserTitlebox,
  StUserImage,
  StProfileImages,
  StUserNickname,
  StAlertButton,
  StHeaderTitle,
  StHeaderPriceWrapper,
  StPrice,
  StTimeLeft,
  StProductInfoBody,
  ButtonWrapper,
  Button,
  StProductIntroSection,
  StProductIntroTitle,
  StProductContent,
  StProductCategory,
  StCategoryTag,
  StAlertIcon,
  FaHeartIcon,
  StSelectChatBg,
  StChatList,
  StChatListItem,
  StConfirmSellBtn,
  StNoListText,
  StSellTitle
};
