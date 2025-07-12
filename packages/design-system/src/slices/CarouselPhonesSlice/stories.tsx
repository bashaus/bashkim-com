import carouselPhonesSliceFactory from "@bashkim-com/prismic-factories/carouselPhonesSliceFactory";
import type { Meta } from "@storybook/nextjs";

import CarouselPhonesSlice from ".";

export default {
  component: CarouselPhonesSlice,
  title: "Prismic slices/Carousel Phones Slice",
  args: {
    slice: carouselPhonesSliceFactory.build(),
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
