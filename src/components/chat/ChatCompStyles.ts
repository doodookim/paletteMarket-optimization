import styled, { css } from 'styled-components';

const StMyImageballoon = styled.img<ImageBalloon>`
  width: 200px;
  height: 200px;
  display: block;
  margin-right: 2.5rem;
  margin-left: auto;
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
  border-radius: 12px;
  cursor: pointer;
  margin-block: 2rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-right: 2rem;
    padding: 0.5rem;
  }
`;

type ImageBalloon = {
  $url: string;
  src: string;
};

const StImageballoon = styled.img<ImageBalloon>`
  width: 200px;
  height: 200px;
  display: block;
  margin-right: auto;
  margin-left: 2.5rem;
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
  border-radius: 12px;
  cursor: pointer;
  margin-block: 2rem;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-left: 2rem;
    padding: 0.5rem;
  }
`;

const StChatballoon = styled.div`
  width: fit-content;
  max-width: 350px;
  color: var(--11-gray);
  background-color: #13b3bc50;
  margin-right: auto;
  margin-left: 2.7rem;
  margin-block: 1rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 500;
  line-height: 1.2;
  font-size: 1.4rem;
  border: 0.1rem solid #13b3bc30;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    max-width: 250px;
    border-radius: 5px;
  }
`;

const StMyChatballoon = styled.div`
  width: fit-content;
  max-width: 350px;
  color: var(--2-gray);
  background-color: #13b3bc;
  margin-left: auto;
  margin-right: 2.7rem;
  margin-block: 1rem;
  padding: 0.9rem 2rem;
  border-radius: 12px;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2;
  white-space: break-spaces;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    max-width: 250px;
    border-radius: 5px;
  }
`;

const StMessageBox = styled.div`
  cursor: pointer;
`;

const StChatFirstMsg = styled.div`
  text-decoration: underline;
  color: blue;
`;

const StStatusOveray = styled.div`
  width: 100%;
  height: 100%;
  background: #31313199;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
`;

const StOverayText = styled.h1`
  width: 100%;
  position: absolute;
  font-size: 2.2rem;
  font-weight: var(--fontWeight-semiBold);
  text-align: center;
  color: var(--opc-100);
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const StRoomName = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 0.5rem;
  color: var(--opc-100);
`;

export {
  StMyImageballoon,
  StImageballoon,
  StChatballoon,
  StMyChatballoon,
  StMessageBox,
  StChatFirstMsg,
  StStatusOveray,
  StOverayText,
  StRoomName
};
