import fullTextSliceFactory from "@bashkim-com/prismic-factories/fullTextSliceFactory";
import type { Meta } from "@storybook/react";

import FullTextSliceComponent from ".";

export default {
  component: FullTextSliceComponent,
  title: "Prismic slices/Full Text Slice",
  args: {
    slice: fullTextSliceFactory.build(),
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

export const FullTextSlice = {};
