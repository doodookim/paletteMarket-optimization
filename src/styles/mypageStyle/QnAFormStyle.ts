import styled, { keyframes } from 'styled-components';
import { IoClose } from '@react-icons/all-files/io5/IoClose';

export const StSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(15%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const StFormContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--drop);
  padding: 1.5rem 3rem;
  text-align: right;
  z-index: 3;
  animation: ${StSlideUp} 0.5s ease;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 93%;
  }
`;

export const Close = styled(IoClose)`
  cursor: pointer;
  font-size: 3rem;
`;

export const StFormWrapper = styled.div`
  text-align: center;

  & p {
    &:first-child {
      font-size: var(--fontSize-H2);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StForm = styled.form`
  width: 60rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 2rem;
  background: var(--white);
  padding: 4rem;
  border-radius: 2rem;

  & input {
    width: 100%;
    height: 5rem;
    font-size: var(--fontSize-H5);
    border: none;
    border-radius: 0.5rem;
    padding-left: 2rem;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &::placeholder {
      color: var(--gray);
    }
  }

  & select {
    width: 100%;
    height: 5rem;
    font-size: var(--fontSize-H5);
    border: none;
    border-radius: 0.5rem;
    padding-left: 2rem;
    background-color: var(--opc-30);
    border-right: 16px solid transparent;
    color: var(--gray);
    font-family: 'BM-JUA';
    &::placeholder {
      color: var(--gray);
    }
  }

  & textarea {
    width: 100%;
    height: 15.6rem;
    resize: none;
    background-color: var(--opc-30);
    font-size: var(--fontSize-H5);
    border: none;
    border-radius: 0.7rem;
    padding: 2rem;
    overflow: hidden;
    line-height: 1.5;
    &::-moz-input-placeholder {
      line-height: 2;
    }
    &::-webkit-input-placeholder {
      line-height: 2;
    }
    &::placeholder {
      color: var(--gray);
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      font-size: var(--fontSize-H6);
      &::placeholder {
        color: var(--gray);
        font-size: 1.2rem;
      }
    }
  }

  & button {
    border: none;
    border-radius: 0.5rem;
    background-color: var(--opc-100);
    color: var(--white);
    width: 10.3rem;
    height: 4.5rem;
    margin: 0 auto;
    font-size: var(--fontSize-H4);
    &:hover {
      cursor: pointer;
    }
    @media screen and (max-width: 768px) {
      width: 6.5rem;
      height: 3rem;
      font-size: var(--fontSize-H6);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
