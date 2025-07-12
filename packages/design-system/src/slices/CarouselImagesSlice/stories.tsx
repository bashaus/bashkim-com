import carouselImagesSliceFactory from "@bashkim-com/prismic-factories/carouselImagesSliceFactory";
import type { Meta } from "@storybook/nextjs";

import CarouselImagesSlice from ".";

export default {
  component: CarouselImagesSlice,
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

export const Fixture = {};
