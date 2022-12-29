import classNames from "classnames";
import SlickSlider, { Settings } from "react-slick";

import { CarouselArrow } from "../CarouselArrow/CarouselArrow";
import { CarouselArrowDirection } from "../CarouselArrow/CarouselArrow.type";
import { CarouselDots } from "../CarouselDots/CarouselDots";
import styles from "./Carousel.module.scss";

export type CarouselProps = Settings & {
  className?: string;
};

export const Carousel = ({
  adaptiveHeight = true,
  className,
  dots = true,
  infinite = false,
  draggable = true,
  lazyLoad = "ondemand",
  ...restProps
}: CarouselProps) => (
  <div className={classNames(className, styles["Carousel"])}>
    <SlickSlider
      adaptiveHeight={adaptiveHeight}
      dots={dots}
      infinite={infinite}
      draggable={draggable}
      lazyLoad={lazyLoad}
      appendDots={CarouselDots}
      prevArrow={<CarouselArrow direction={CarouselArrowDirection.PREV} />}
      nextArrow={<CarouselArrow direction={CarouselArrowDirection.NEXT} />}
      {...restProps}
    />
  </div>
);
