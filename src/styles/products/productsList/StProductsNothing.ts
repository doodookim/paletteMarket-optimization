import styled from 'styled-components';
import { FaExclamation } from '@react-icons/all-files/fa/FaExclamation';

export const NothingContainer = styled.div`
  width: 100%;
  margin: auto;
  @media screen and (max-width: 1180px) {
    max-width: 93%;
  }
`;

export const NothingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
  height: 40vh;

  & p {
    font-size: var(--fontSize-H1);
    font-weight: var(--fontWeight-bold);
    text-align: center;
    line-height: 1.5;
    white-space: pre-line;

    @media screen and (max-width: 768px) {
      font-size: var(--fontSize-H4);
    }
  }
  & span {
    font-size: var(--fontSize-H1);
    font-weight: var(--fontWeight-bold);
    color: var(--opc-100);
    text-align: center;
    line-height: 1.5;
    white-space: pre-line;

    @media screen and (max-width: 768px) {
      font-size: var(--fontSize-H4);
    }
  }
`;

export const NothingIcon = styled.div`
  width: 6.6rem;
  height: 6.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--opc-10);
  @media screen and (max-width: 768px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;
export const ExclamationMark = styled(FaExclamation)`
  width: 65%;
  height: 65%;
  color: var(--opc-100);
`;
