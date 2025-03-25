import carouselImagesSliceFactory from "@bashkim-com/prismic-factories/carouselImagesSliceFactory";
import type { Meta } from "@storybook/react";

import CarouselImagesSliceComponent from ".";

export default {
  component: CarouselImagesSliceComponent,
  title: "Prismic slices/Carousel Images Slice",
  args: {
    slice: carouselImagesSliceFactory.build(),
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
