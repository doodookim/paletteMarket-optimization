import { GoChevronLeft } from '@react-icons/all-files/go/GoChevronLeft';
import { GrDocumentPdf } from '@react-icons/all-files/gr/GrDocumentPdf';
import { RiFileHwpLine } from '@react-icons/all-files/ri/RiFileHwpLine';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import { StFadeAni } from '../../pages/chat/style';
import { ColorProps } from '../../pages/community/api/model';

export const PdfIcon = styled(GrDocumentPdf)`
  width: 2rem;
  height: 2rem;
  color: var(--opc-100);
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const HwpIcon = styled(RiFileHwpLine)`
  width: 2rem;
  height: 2rem;
  color: var(--opc-100);
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const LayoutContentArea = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const PickerColorArea = styled.div`
  display: flex;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 0;
  }
`;
export const LayoutFileListArea = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const LayoutFileArea = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const LayoutAnonArea = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const FileListContainer = styled.div`
  width: 100%;
`;

export const FileList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  & div {
    display: flex;
    gap: 5px;
  }
  & li {
    background-color: var(--8-gray);
    color: var(--2-gray);
    /* height: 2rem; */
    font-size: var(--fontSize-H5);
    border-radius: 1rem;
    padding: 0.5rem 1rem;
  }
  & button {
    background-color: transparent;
    border: none;
    /* color: var(--10-gray); */
    cursor: pointer;
  }
`;
export const LayoutValueText = styled.div`
  width: 20%;
  max-width: 16rem;
  font-size: var(--fontSize-body);
  font-weight: var(--fontWeight-bold);
  display: flex;
  align-items: center;
  & span {
    color: var(--opc-100);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--fontSize-H5);
  }
`;
export const LayoutTitleContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  & input {
    height: 54px;
    width: 100%;
    max-width: 90.6rem;
    /* background-color: var(--3-gray); */
    border: none;
    border-radius: 5px;
    padding-left: 16px;
    /* color: var(--12-gray); */

    font-size: var(--fontSize-body);
    &::placeholder {
      color: var(--gray);
      font-size: var(--fontSize-H5);
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    & input {
      height: 4rem;
      font-size: var(--fontSize-H6);
      &::placeholder {
        font-size: var(--fontSize-H6);
      }
    }
  }
`;
export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

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
export const LayoutBottom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 90.6rem;
  justify-content: space-between;
  & button {
    border: none;
    border-radius: 1rem;
    width: 10rem;
    height: 4rem;
    color: var(--white);
    background-color: var(--opc-100);
    font-size: var(--fontSize-H4);
    font-weight: var(--fontWeight-bold);
    cursor: pointer;
  }
  & label {
    display: flex;
    align-items: center;
    font-size: var(--fontSize-H5);
  }
  @media screen and (max-width: 768px) {
    & button {
      width: 6.5rem;
      height: 3rem;
      font-size: var(--fontSize-H6);
    }
    & label {
      font-size: var(--fontSize-H6);
    }
  }
`;
export const LayoutContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
  width: 100%;

  & h1 {
    font-size: 30px;
    margin-top: 50px;
    text-align: center;
  }
`;
export const LayoutCategoryContainer = styled.div`
  /* height: 30px; */
  display: flex;
  align-items: center;
  font-size: var(--fontSize-H5);
  white-space: nowrap;
  margin-bottom: 2rem;
  & label {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-right: 3rem;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: var(--fontSize-H5);
    & label {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      cursor: pointer;
      margin-bottom: 1rem;
    }
  }
`;
export const CategoryGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const LayoutFileUploader = styled.label`
  background-color: var(--opc-30);
  border-radius: 5px;
  height: 54px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  font-size: var(--fontSize-H5);
  width: 100%;
  max-width: 90.6rem;
  /* color: var(--6-gray); */
  margin-bottom: 1.5rem;
  & input {
    display: none;
  }
  @media screen and (max-width: 768px) {
    height: 4rem;
    margin-bottom: 0.5rem;

    font-size: var(--fontSize-H6);
  }
`;
export const LayoutQuillEditor = styled(ReactQuill)`
  background-color: var(--opc-30);
  border-radius: 5px;
  width: 100%;
  max-width: 906px;
  margin-bottom: 2rem;

  .ql-container {
    height: 70rem;
    overflow: scroll;
    border: none;
    font-family: 'BM-JUA';

    font-size: var(--fontSize-H6);
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .ql-toolbar {
    border: none;
    border-bottom: 1px solid var(--4-gray);
  }
  .ql-editor strong {
    font-weight: bold;
  }
  .ql-editor em {
    font-style: italic;
  }
  .ql-editor ::placeholder {
    color: white;
  }
  .ql-editor p {
    display: flex;
    line-height: 30px;
    font-size: var(--fontSize-body);
  }
  .ql-editor img {
    width: 60%;
  }
  .ql-snow .ql-fill,
  .ql-snow .ql-stroke.ql-fill {
    /* fill: var(--8-gray); */
  }
  .ql-snow .ql-stroke {
    /* stroke: var(--8-gray); */
  }
  .ql-editor.ql-blank::before {
    /* color: var(--5-gray); */
    font-size: var(--fontSize-H5);
    font-style: normal;
  }
  @media screen and (max-width: 768px) {
    .ql-container {
      height: 25rem;
    }
    & img {
      max-width: 80%;
    }
    .ql-editor p {
      line-height: 2rem;
      font-size: var(--fontSize-H6);
    }
    .ql-editor.ql-blank::before {
      font-size: var(--fontSize-H6);
    }
  }
`;
export const CheckBoxs = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: var(--opc-30);
  border: none;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  outline: none;
  margin-right: 5px;

  /* 체크 표시 스타일 */
  &:checked:before {
    content: '✔';

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: var(--opc-100);
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  animation: ${StFadeAni} 0.3s ease;
  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1066px;
  width: 77.5%;
  @media screen and (max-width: 768px) {
    width: 93%;
  }
`;

export const Topper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--4-gray);
  /* gap: 1rem; */

  & p {
    font-size: var(--fontSize-H6);
    color: var(--opc-100);
  }
  & h1 {
    font-size: var(--fontSize-H1);
    font-weight: var(--fontWeight-bold);
  }
  @media screen and (max-width: 768px) {
    & h1 {
      font-size: var(--fontSize-H4);
      margin-right: 1rem;
    }
    & p {
      font-size: 1rem;
    }
  }
`;
export const Validate = styled.p`
  color: #ea4949;
  font-size: var(--fontSize-H6);
  font-weight: var(--fontWeight-regular);
  margin-bottom: 2rem;
  margin-left: 18%;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-left: 0;
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
  width: 80%;
  height: 100%;
  color: var(--opc-100);
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const ColorButton = styled.div<ColorProps>`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 3px solid
    ${(props) =>
      props.$isSelected ? `var(--c-${props.$color})` : 'transparent'};
  background-color: ${(props) => `var(--c-${props.$color}-30)`};
  @media screen and (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;
// ${(props) => `var(--c-${props.$color}-30)`}

export const ColorPicker = styled.div`
  display: flex;
  gap: 1rem;
`;
