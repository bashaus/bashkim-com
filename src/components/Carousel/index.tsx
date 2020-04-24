import React from 'react';
import SlickSlider from 'react-slick';

import styles from './styles.module.scss';

interface CarouselProps {
  children: React.ReactNode;
  responsive?: any;
  slidesToShow?: number;
  slidestoScroll?: number;
}

const Carousel = ({
  children,
  responsive,
  slidesToShow = 1,
  slidestoScroll = 1,
}: CarouselProps): JSX.Element => (
  <div className={styles.Carousel}>
    <SlickSlider
      adaptiveHeight
      dots
      dotsClass={styles.CarouselDots}
      infinite={false}
      draggable
      lazyLoad="ondemand"
      responsive={responsive}
      slidesToShow={slidesToShow}
      slidesToScroll={slidestoScroll}
    >
      {children}
    </SlickSlider>
  </div>
);

export default Carousel;
