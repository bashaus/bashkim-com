import { CarouselImagesSliceFixture } from "@bashkim-com/prismic";

import { CarouselImagesSlice } from ".";

export default {
  title: "Slices/Carousel Images",
};

export const Render = (): JSX.Element => (
  <CarouselImagesSlice slice={CarouselImagesSliceFixture} />
);
