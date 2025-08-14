import Stack from "@mui/material/Stack";
import { EmblaOptionsType } from "embla-carousel";
import { PropsWithChildren } from "react";

import CarouselButtons from "../CarouselButtons";
import CarouselProvider from "../CarouselProvider";
import CarouselSlider from "../CarouselSlider";
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

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <CarouselButtons />
        <CarouselSlider />
      </Stack>
    </CarouselProvider>
  );
}
