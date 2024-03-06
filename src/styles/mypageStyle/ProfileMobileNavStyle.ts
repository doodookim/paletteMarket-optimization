import styled from 'styled-components';
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack';

export const StMobileNav = styled.div`
  display: none;

  & div {
    display: flex;
    gap: 1rem;
    align-items: center;
    white-space: nowrap;

    & p {
      font-size: var(--fontSize-body);
      font-weight: var(--fontWeight-bold);
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    //padding: 1.5rem;
  }
`;

export const StMobileBack = styled(IoIosArrowBack)`
  cursor: pointer;
  color: var(--opc-100);
`;
