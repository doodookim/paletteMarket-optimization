import styled from 'styled-components';
import { MdAddAPhoto } from '@react-icons/all-files/md/MdAddAPhoto';
import { IoMdSettings } from '@react-icons/all-files/io/IoMdSettings';

export const StProfileContainer = styled.div`
  width: 77.5%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 4rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 93%;
    padding: 0 1.5rem;
    gap: 2rem;
  }
`;

export const StProfileContentContainer = styled.div`
  display: flex;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const StProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & img {
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
  }

  & input {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const StEditUserPhoto = styled(MdAddAPhoto)`
  position: absolute;
  background: var(--opc-100);
  padding: 1.2rem;
  border-radius: 50%;
  font-size: 5rem;
  color: var(--white);
  cursor: pointer;
`;

export const StProfileContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const StProfileContentButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;

  & button {
    background: transparent;
    font-size: var(--fontSize-H5);
    color: var(--10-gray);
    border: none;
    cursor: pointer;
    &:hover {
      color: var(--opc-90);
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const StNicknameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: var(--fontSize-H4);

    & h2 {
      font-weight: var(--fontWeight-semiBold);
      text-align: center;
      font-size: var(--fontSize-H4);
    }

    & input {
      background: var(--opc-30);
      outline: none;
      border: none;
      border-radius: 8px;
      padding: 0.8rem 1.6rem;
      color: var(--11-gray);
      font-size: var(--fontSize-H4);

      &:focus {
        border: 1px solid var(--opc-90);
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StSettingButton = styled(IoMdSettings)`
  cursor: pointer;
  font-size: var(--fontSize-H4);
  &:hover {
    color: var(--opc-90);
  }
`;

export const StSettingMenu = styled.ul`
  background: var(--opc-50);
  display: flex;
  text-align: center;
  border-radius: 10px;
  color: var(--black);
  white-space: nowrap;

  & li {
    cursor: pointer;
    padding: 1rem 1.2rem;
    font-size: var(--fontSize-H5);

    &:last-child {
      color: #ea4949;
    }

    &:hover {
      color: var(--opc-100);
    }
  }
`;

export const StCancelAndSaveWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;

  & button {
    font-size: var(--fontSize-body);
  }
`;

export const StContentButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    background: transparent;
    font-size: var(--fontSize-H5);
    color: var(--10-gray);
    border: none;
    cursor: pointer;
    &:hover {
      color: var(--opc-90);
    }
  }
`;

export const StProfileEditButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StSaveButton = styled.button`
  color: var(--opc-100);
`;

export const StProfileContent = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  gap: 2rem;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
