import React, { SetStateAction } from 'react';
import { Product } from '../../pages/productsDetail/types';
import DetailViewerCarousel from './detailCarousel/DetailCarousel';
import { IoIosClose } from '@react-icons/all-files/io/IoIosClose';
import { StCloseViewerBtn, StViewer } from './ProductDetailStyles';

type ViewerProps = {
  product: Product[];
  setShowViewer: React.Dispatch<SetStateAction<boolean>>;
};

const ImageViewer = ({ product, setShowViewer }: ViewerProps) => {
  return (
    <StViewer>
      <StCloseViewerBtn>
        <IoIosClose onClick={() => setShowViewer(false)} />
      </StCloseViewerBtn>
      <DetailViewerCarousel
        carouselImages={
          product[0]?.image_url === null ? [] : product[0]?.image_url
        }
      />
    </StViewer>
  );
};

export default ImageViewer;
