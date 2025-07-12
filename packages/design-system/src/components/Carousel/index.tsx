import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Stack from "@mui/material/Stack";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Children, PropsWithChildren } from "react";

import CarouselButton from "../CarouselButton";
import { useCarouselButtons } from "../CarouselButton/hooks";
import CarouselDot from "../CarouselDot";
import { useCarouselDots } from "../CarouselDot/hooks";
import * as S from "./styles";

export type CarouselProps = Readonly<
  PropsWithChildren<{
    slidesVisible?: number;
    options?: EmblaOptionsType;
  }>
>;

export default function Carousel({
  children,
  slidesVisible = 1,
  options = {},
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    selectedIndex,
    scrollSnaps,
    onDotClick: onDotButtonClick,
  } = useCarouselDots(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarouselButtons(emblaApi);

  return (
    <S.Embla sx={{ "--slide-size": `${100 / slidesVisible}%` }}>
      <S.Viewport ref={emblaRef}>
        <S.Container>
          {Children.map(children, (child, i) => (
            <S.Slide key={i}>{child}</S.Slide>
          ))}
        </S.Container>
      </S.Viewport>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1}>
          <CarouselButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          >
            <ChevronLeftIcon />
          </CarouselButton>

          <CarouselButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          >
            <ChevronRightIcon />
          </CarouselButton>
        </Stack>

        <Stack direction="row" spacing={1}>
          {scrollSnaps.map((_, index) => (
            <CarouselDot
              key={index}
              onClick={() => onDotButtonClick(index)}
              aria-selected={index === selectedIndex ? "true" : "false"}
            >
              {index}
            </CarouselDot>
          ))}
        </Stack>
      </Stack>
    </S.Embla>
  );
}
