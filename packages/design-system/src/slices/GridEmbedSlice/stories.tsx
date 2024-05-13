import { GridEmbedSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta } from "@storybook/react";

import { GridEmbedSlice as GridEmbedSliceComponent } from ".";

export default {
  component: GridEmbedSliceComponent,
  title: "Prismic slices/Grid Embed Slice",
  args: {
    slice: GridEmbedSliceFixture,
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

export const GridEmbedSlice = {};
