import { IoMdSearch } from '@react-icons/all-files/io/IoMdSearch';
import styled, { css } from 'styled-components';

type MobileProps = {
  $position: boolean;
};

const SearchInputContainer = styled.div<MobileProps>`
  /* display: flex; */
  align-items: center;
  /* position: relative; */

  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 90vh;
    position: fixed;
    margin-top: 7rem;
    top: 0;
    right: 0;
    z-index: 3000;

    transition: all 0.3s ease;
    ${(props) => {
      if (props.$position === true) {
        return css`
          display: block;
          opacity: 1;
          transform: translateX(0%);
        `;
      } else {
        return css`
          display: none;
          opacity: 0;
          transform: translateX(100%);
        `;
      }
    }};
    background-color: var(--bgColor);
    border: 0.1rem solid var(--opc-100);
    border-radius: 0.5rem;
    padding: 2rem;
  }
`;

const SearchInputBar = styled.input`
  width: 33rem;
  height: 3.7rem;
  padding-left: 2rem;
  border-radius: 1.9rem;
  background: var(--opc-50);
  border: none;
  color: var(--black);
  font-size: var(--fontSize-H5);
  font-weight: var(--fontWeight-medium);
  line-height: 2.5rem;
  outline: none;
  &::placeholder {
    padding-left: 1rem;
  }
  @media screen and (max-width: 1300px) {
    width: 48.8rem;
  }
  @media screen and (max-width: 1100px) {
    width: 40rem;
  }

  @media screen and (max-width: 900px) {
    width: 40rem;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    left: 40%;
    transform: translateX(-50%);
    width: 70%;
    /* background-color: var(--2-gray); */
    border: none;
    border-radius: 0;
    padding-left: 0.5rem;
  }
  @media screen and (max-width: 460px) {
    position: relative;
    margin-left: 2rem;
    left: 40%;
    transform: translateX(-50%);
    width: 90%;
    /* background-color: var(--2-gray); */
    border: none;
    border-radius: 0;
    padding-left: 0.5rem;
  }
`;

const ClearInputButton = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 50%;
    right: 70px;
    transform: translate(-50%, -50%);
    color: #878787;
    font-size: 3rem;
    cursor: pointer;
  }
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(-50%, -50%);
    color: #878787;
    font-size: 3rem;
    cursor: pointer;
  }
`;
const SIoMdSearch = styled(IoMdSearch)`
  position: absolute;
  top: 32%;
  right: 55%;
  z-index: 3;
  color: var(--opc-100);
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const SearchBtn = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 10px;
  width: 37px;
  height: 37px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    position: relative;
    display: none;
  }
`;

const SearchIcon = styled(IoMdSearch)`
  width: 2.3rem;
  height: 2.3rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export {
  SearchInputContainer,
  SearchInputBar,
  ClearInputButton,
  SIoMdSearch,
  SearchBtn,
  SearchIcon
};
