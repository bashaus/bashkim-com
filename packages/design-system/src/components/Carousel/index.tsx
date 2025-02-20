import classNames from "classnames";
import SlickSlider, { Settings } from "react-slick";

import CarouselArrow from "../CarouselArrow";
import { CarouselArrowDirection } from "../CarouselArrow/types";
import CarouselDots from "../CarouselDots";
import styles from "./styles.module.scss";

export type CarouselProps = Readonly<
  Settings & {
    className?: string;
  }
>;

export default function Carousel({
  adaptiveHeight = true,
  className,
  dots = true,
  infinite = false,
  draggable = true,
  lazyLoad = "ondemand",
  ...restProps
}: CarouselProps) {
  return (
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
}
