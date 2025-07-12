import Stack from "@mui/material/Stack";
import { EmblaOptionsType } from "embla-carousel";
import { PropsWithChildren } from "react";

import CarouselButtons from "../CarouselButtons";
import CarouselDots from "../CarouselDots";
import CarouselProvider from "../CarouselProvider";
import CarouselViewport from "../CarouselViewport";

export type CarouselProps = Readonly<
  PropsWithChildren<{
    slidesVisible?: number;
    options?: EmblaOptionsType;
  }>
>;

export default function Carousel({
  children,
  slidesVisible = 1,
}: CarouselProps) {
  return (
    <CarouselProvider slidesVisible={slidesVisible}>
      <CarouselViewport>{children}</CarouselViewport>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CarouselButtons />
        <CarouselDots />
      </Stack>
    </CarouselProvider>
  );
}
