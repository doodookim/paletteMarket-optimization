import { AiFillAlert } from '@react-icons/all-files/ai/AiFillAlert';
import { BsThreeDots } from '@react-icons/all-files/bs/BsThreeDots';
import { GoChevronLeft } from '@react-icons/all-files/go/GoChevronLeft';
import { GrDocumentExcel } from '@react-icons/all-files/gr/GrDocumentExcel';
import { GrDocumentPdf } from '@react-icons/all-files/gr/GrDocumentPdf';
import { IoTrashOutline } from '@react-icons/all-files/io5/IoTrashOutline';
import { AiFillEdit } from '@react-icons/all-files/ai/AiFillEdit';
import { RiBallPenLine } from '@react-icons/all-files/ri/RiBallPenLine';
import { RiFileHwpLine } from '@react-icons/all-files/ri/RiFileHwpLine';

import styled from 'styled-components';
import { StFadeAni } from '../../pages/productsDetail/style';
export const HwpIcon = styled(RiFileHwpLine)`
  font-size: 2rem;
  color: #0085ff;
`;
export const PdfIcon = styled(GrDocumentPdf)`
  font-size: 2rem;
  color: red;
`;

export const ExcelIcon = styled(GrDocumentExcel)`
  font-size: 2.2rem;
  color: green;
`;
export const DefaultIcon = styled(AiFillEdit)`
  font-size: 2rem;
  color: var(--1-gray);
`;
export const ProfileImage = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
`;

export const DefaultImage = styled.div`
  background-color: var(--10-gray);
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
`;
export const DetailFiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  margin-bottom: 2rem;

  & a {
    color: var(--1-gray);
    text-decoration: none;
    /* overflow: hidden; */
    /* display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal; */
  }
  & div {
    background-color: var(--10-gray);
    /* width: 25rem; */
    height: 5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    border-radius: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    & div {
      height: 3rem;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  line-height: 3rem;
  min-height: 60rem;
  color: var(--10-gray);
  font-size: var(--fontSize-body);
  font-weight: var(--fontWeight-medium);
  & img {
    width: 60%;
    max-width: 40rem;
  }
  @media screen and (max-width: 768px) {
    font-size: var(--fontSize-H5);
    line-height: 2rem;
    min-height: 30rem;
    & img {
      max-width: 28rem;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--12-gray);
  animation: ${StFadeAni} 0.3s ease;
  & strong {
    font-weight: bold;
  }
  & em {
    font-style: italic;
  }
  & p {
    display: flex;
  }
`;
export const FeatureArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ContentsContainer = styled.div`
  width: 77.5%;
  max-width: 111.6rem;
  min-height: 60rem;
  display: flex;
  flex-direction: column;
`;
export const WriteWrap = styled.div`
  width: 77.5%;
  max-width: 111.6rem;
  @media screen and (max-width: 768px) {
    width: 93%;
  }
`;
export const BtnStyle = styled.button`
  border: none;
  background-color: transparent;
  font-size: var(--fontSize-H6);
  color: var(--8-gray);
  font-weight: var(--fontWeight-semiBold);
  margin: 0.5rem;
  cursor: pointer;
`;
export const Topper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 111.6rem;
  margin-bottom: 1rem;
`;
export const DetailBody = styled.div`
  border-bottom: 0.1rem solid var(--5-gray);
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    /* border-bottom: none; */
    /* margin-bottom: 0; */
  }
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: end;
  font-size: var(--fontSize-H5);
  align-items: center;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Category = styled.p`
  /* margin-left: 1.5rem; */
  width: fit-content;
  padding: 0 0.8rem;
  height: 2.3rem;
  font-size: var(--fontSize-H6);
  font-weight: var(--fontWeight-bold);
  color: var(--10-gray);
  background-color: var(--3-gray);
  border-radius: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    height: 2.1rem;
  }
`;

export const MainTopper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
`;
export const SubTopper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
export const TitleCategory = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  & h1 {
    font-size: var(--fontSize-H3);
    font-weight: var(--fontWeight-semiBold);
    color: var(--12-gray);
  }
  & button {
    font-size: var(--fontSize-H1);
    background-color: transparent;
    border: none;
    color: var(--opc-100);
  }
  @media screen and (max-width: 768px) {
    & h1 {
      font-size: var(--fontSize-body);
      font-weight: var(--fontWeight-medium);
    }
    & button {
      font-size: var(--fontSize-H1);
      background-color: transparent;
      border: none;
      color: var(--opc-100);
    }
  }
`;
export const AlertIcon = styled(AiFillAlert)`
  color: var(--opc-50);
  margin-left: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;
export const ReportArea = styled.div`
  display: flex;
  align-items: start;
  & p {
    font-size: var(--fontSize-H6);
    color: var(--6-gray);
    border-radius: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
  }
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const TrachIcon = styled(IoTrashOutline)`
  color: var(--opc-50);
  margin-left: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;
export const PenIcon = styled(RiBallPenLine)`
  color: var(--opc-50);
  margin-left: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;
export const NameP = styled.p`
  font-size: var(--fontSize-H5);
  font-weight: var(--fontWeight-medium);
  color: var(--10-gray);
`;
export const TimeP = styled.p`
  font-size: var(--fontSize-H5);
  font-weight: var(--fontWeight-medium);
  color: var(--6-gray);
  @media screen and (max-width: 768px) {
    font-size: var(--fontSize-H6);
  }
`;

export const NoticeLike = styled.p`
  font-size: var(--fontSize-H5);
  font-weight: var(--fontWeight-medium);
  color: var(--10-gray);
  background-color: var(--opc-10);
  width: 28rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8rem;
  margin-bottom: 1rem;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    font-size: var(--fontSize-H6);
  }
`;
export const TitleTopper = styled.div`
  display: flex;
  /* margin-top: 50px; */
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--4-gray);
  margin-bottom: 2rem;
  gap: 1rem;
  /* & button {
    font-size: var(--fontSize-H1);
    background-color: transparent;
    border: none;
    color: var(--opc-100);
  } */
  & p {
    font-size: var(--fontSize-H6);
    font-weight: var(--fontWeight-bold);
    color: var(--opc-100);
  }

  & h1 {
    font-size: var(--fontSize-H1);
  }
  @media screen and (max-width: 768px) {
    & h1 {
      font-size: var(--fontSize-H5);
    }
    & p {
      font-size: 1rem;
    }
  }
`;
export const Dots = styled(BsThreeDots)`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
    color: var(--9-gray);
  }
`;
export const EditDropdown = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    background-color: var(--drop);
    border: 1px solid var(--opc-100);
    z-index: 1000;
    border-radius: 1rem;
    /* top: 13rem;*/
    right: 5%;
  }
`;

export const DropdownItem = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 12px 12px;
    font-size: var(--fontSize-H6);
    border-radius: 1rem;
    cursor: pointer;
    &:hover {
      background-color: var(--opc-100);
    }
  }
`;
// export const BackIcon = styled(GoChevronLeft)`
//   color: var(--opc-100);
//   display: none;
//   width: 2rem;
//   height: 1.5rem;
//   :hover {
//     cursor: pointer;
//   }
//   @media screen and (max-width: 768px) {
//     display: block;
//   }
// `;
export const BackBtnBox = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 2rem;
    height: 1.5rem;
    :hover {
      cursor: pointer;
    }
  }
`;
export const BackIcon = styled(GoChevronLeft)`
  width: 100%;
  height: 100%;
  color: var(--opc-100);
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;
