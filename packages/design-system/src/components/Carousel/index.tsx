import SlickSlider, { Settings } from "react-slick";

import { SlickCarouselGlobalStyles } from "../../libraries/slick/styles";
import * as S from "./styles";

export type CarouselProps = Settings;

export const Carousel = ({
  adaptiveHeight = true,
  dots = true,
  infinite = false,
  draggable = true,
  lazyLoad = "ondemand",
  ...args
}: CarouselProps) => (
  <S.Carousel>
    <SlickCarouselGlobalStyles />
    <SlickSlider
      adaptiveHeight={adaptiveHeight}
      dots={dots}
      infinite={infinite}
      draggable={draggable}
      lazyLoad={lazyLoad}
      appendDots={(dots) => <S.Dots>{dots}</S.Dots>}
      prevArrow={<S.ArrowPrev />}
      nextArrow={<S.ArrowNext />}
      {...args}
    />
  </S.Carousel>
);
