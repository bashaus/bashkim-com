import { EmblaOptionsType } from "embla-carousel";
import { PropsWithChildren } from "react";

import CarouselPagination from "../CarouselPagination";
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
      <CarouselPagination />
    </CarouselProvider>
  );
}
