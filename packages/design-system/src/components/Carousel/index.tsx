import SlickSlider, { Settings } from "react-slick";

import CarouselArrow from "../CarouselArrow";
import { CarouselArrowDirection } from "../CarouselArrow/types";
import CarouselDots from "../CarouselDots";
import * as S from "./styles";

export type CarouselProps = Readonly<
  Settings & {
    className?: string;
  }
>;

export default function Carousel({
  adaptiveHeight = true,
  dots = true,
  infinite = false,
  draggable = true,
  lazyLoad = "ondemand",
  ...restProps
}: CarouselProps) {
  return (
    <S.Carousel>
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
    </S.Carousel>
  );
}
