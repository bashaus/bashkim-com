import fullTextSliceFactory from "@bashkim-com/prismic-factories/fullTextSliceFactory";
import type { Meta } from "@storybook/nextjs";

import FullTextSlice from ".";

export default {
  component: FullTextSlice,
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

export const Fixture = {};
