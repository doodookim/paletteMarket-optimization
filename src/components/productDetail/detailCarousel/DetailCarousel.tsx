import React, { useCallback, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft } from '@react-icons/all-files/fa/FaChevronLeft';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import {
  ArrowButton,
  CarouselButtons,
  CarouselContainer,
  CarouselImage,
  ColoredIcon,
  PageCarouselImage,
  StSlider
} from '../ProductDetailStyles';
interface InfiniteCarouselProps {
  carouselImages: string[];
}

const DetailViewerCarousel: React.FC<InfiniteCarouselProps> = ({
  carouselImages
}) => {
  const slickRef = useRef<Slider | null>(null);
  const previous = useCallback(() => slickRef.current?.slickPrev(), []);
  const next = useCallback(() => slickRef.current?.slickNext(), []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    appendDots: (dots: any) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom'
  };

  return (
    <CarouselContainer>
      <StSlider {...settings} ref={slickRef}>
        {carouselImages.map((image, index) => (
          <PageCarouselImage
            key={index}
            src={image}
            alt={`Carousel ${index + 1}`}
          />
        ))}
      </StSlider>
      <CarouselButtons>
        <ArrowButton onClick={previous}>
          <ColoredIcon>
            <FaChevronLeft />
          </ColoredIcon>
        </ArrowButton>
        <ArrowButton onClick={next}>
          <ColoredIcon>
            <FaChevronRight className="rightarrow" />
          </ColoredIcon>
        </ArrowButton>
      </CarouselButtons>
    </CarouselContainer>
  );
};

export default DetailViewerCarousel;
