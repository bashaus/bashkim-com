import { ReactNode } from "react";
import SlickSlider, { ResponsiveObject } from "react-slick";

import styles from "./styles.module.scss";
import dotsStyles from "./styles.dots.module.scss";

export type CarouselProps = {
  children: ReactNode;
  responsive?: Array<ResponsiveObject>;
  slidesToShow?: number;
  slidestoScroll?: number;
};

export const Carousel = ({
  children,
  responsive,
  slidesToShow = 1,
  slidestoScroll = 1,
}: CarouselProps): JSX.Element => (
  <div className={styles.Carousel}>
    <SlickSlider
      adaptiveHeight
      dots
      dotsClass={dotsStyles.CarouselDots}
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
