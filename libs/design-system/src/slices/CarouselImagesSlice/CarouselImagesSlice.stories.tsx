import { CarouselImagesSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta } from "@storybook/react";

import { CarouselImagesSlice as CarouselImagesSliceComponent } from "./CarouselImagesSlice";

export default {
  component: CarouselImagesSliceComponent,
  title: "Prismic slices/Carousel Images Slice",
  args: {
    slice: CarouselImagesSliceFixture,
  },
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} as Meta;

export const CarouselImagesSlice = {};
