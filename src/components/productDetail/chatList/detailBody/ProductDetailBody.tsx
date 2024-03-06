import React, { useEffect, useState } from 'react';
import { Product } from '../../../../pages/productsDetail/types';
import { GoInfo } from '@react-icons/all-files/go/GoInfo';
import {
  StMapButton,
  StQualityInfo,
  StQualityInfoBox,
  StRowValue,
  StValueParagraph
} from '../../ProductDetailStyles';
import { checkDevice } from '../../../chat/chatRoom/CheckDvice';

type BodyInfo = {
  productInfo: any[];
  data: Product;
  i: number;
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductDetail = ({ productInfo, data, i, setShowMap }: BodyInfo) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const showQuality = () => {
    setIsHover(true);
  };

  const hideQuality = () => {
    setIsHover(false);
  };

  const handleShowMap = () => {
    setShowMap(true);
  };

  useEffect(() => {
    if (checkDevice(window.navigator.userAgent)) setIsMobile(true);
    if (checkDevice(window.navigator.userAgent)) setIsMobile(false);
  }, []);

  return (
    <>
      {productInfo[i] !== data.quality &&
        productInfo[i] === data.address &&
        data.address !== '' && (
          <StRowValue>
            {productInfo[i]}
            <StMapButton onClick={handleShowMap}>
              {isMobile ? '지도 보기' : '지도로 확인하기'}
            </StMapButton>
          </StRowValue>
        )}

      {productInfo[i] !== data.quality && productInfo[i] !== data.address && (
        <StRowValue>{productInfo[i]}</StRowValue>
      )}
      {productInfo[i] !== data.shipping_cost &&
        productInfo[i] !== data.address && <></>}

      {productInfo[i] === data.changable && data.changable === '불가능' && (
        <>{data.changable}</>
      )}
      {productInfo[i] === data.changable && data.changable === '가능' && (
        <>
          <StRowValue>{productInfo[i]}</StRowValue>
        </>
      )}

      {productInfo[i] === data.quality && (
        <StRowValue>
          <StValueParagraph>{productInfo[i]}</StValueParagraph>
          <StQualityInfo>
            <div style={{ width: '100%', height: '100%' }}>
              <p onMouseEnter={showQuality} onMouseLeave={hideQuality}>
                {<GoInfo />}
              </p>
            </div>

            {isHover && (
              <StQualityInfoBox>
                <p>
                  <span>사용감 없음</span> &nbsp;사용은 했지만 눈에 띄는
                  흔적이나 얼룩이 없어요 / 아주 조금 사용했어요
                </p>

                <p>
                  <span>사용감 있음</span> &nbsp;눈에 띄는 흔적이나 얼룩이 약간
                  있어요 / 절반정도 사용했어요
                </p>
                <p>
                  <span>사용감 많음</span> &nbsp;눈에 띄는 흔적이나 얼룩이 많이
                  있어요 / 많이 사용했어요
                </p>
              </StQualityInfoBox>
            )}
          </StQualityInfo>
        </StRowValue>
      )}
    </>
  );
};

export default ProductDetail;
