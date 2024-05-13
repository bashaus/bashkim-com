import { CarouselPhonesSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta } from "@storybook/react";

import { CarouselPhonesSlice as CarouselPhonesSliceComponent } from ".";

export default {
  component: CarouselPhonesSliceComponent,
  title: "Prismic slices/Carousel Phones Slice",
  args: {
    slice: CarouselPhonesSliceFixture,
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

export const CarouselPhonesSlice = {};
