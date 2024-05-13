import { AccoladeSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta } from "@storybook/react";

import { AccoladeSlice as AccoladeSliceComponent } from ".";

export default {
  component: AccoladeSliceComponent,
  title: "Prismic slices/Accolade Slice",
  args: {
    slice: AccoladeSliceFixture,
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

export const AccoladeSlice = {};
