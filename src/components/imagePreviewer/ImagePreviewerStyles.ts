import { IoClose } from '@react-icons/all-files/io5/IoClose';
import styled, { css, keyframes } from 'styled-components';

const ImageAni = keyframes`
  from {
    opacity: 0;
    scale: 0;
  }

  to {
    opacity: 1;
    scale: 1;
  }
`;

const StPreviewContainer = styled.div`
  width: 100%;
  border-radius: 9px;
  margin-block: 1rem;
  padding: 1.25rem;
  display: flex;
  gap: 1.65rem;
  align-items: center;
  overflow-x: scroll;
  background-color: #1d1d1d30;
`;
type ItemType = {
  $url: string | undefined;
};

const StPreviewItems = styled.div<ItemType>`
  width: 12rem;
  height: 12rem;
  border-radius: 0.6rem;
  position: relative;
  ${(props) => {
    if (props.$url && props.$url !== undefined) {
      return css`
        background: url(${props.$url});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      `;
    } else {
      return css`
        background: #eee;
      `;
    }
  }}

  animation: ${ImageAni} .3s ease
`;

const StdeleteImage = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  top: -0.6rem;
  right: -0.75rem;
  border-radius: 50%;
  background-color: var(--opc-100);
`;

const StCloseBtn = styled(IoClose)`
  color: black;
  padding-left: 0.15rem;
  padding-top: 0.1rem;
  font-weight: var(--fontWeight-bold);
  cursor: pointer;
`;

export {
  ImageAni,
  StPreviewContainer,
  StPreviewItems,
  StdeleteImage,
  StCloseBtn
};
