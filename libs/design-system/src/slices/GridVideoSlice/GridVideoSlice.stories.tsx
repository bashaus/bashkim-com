import { GridVideoSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta, StoryFn } from "@storybook/react";

import {
  GridVideoSlice as GridVideoSliceComponent,
  GridVideoSliceProps,
} from "./GridVideoSlice";

export default {
  component: GridVideoSliceComponent,
  title: "Prismic slices/Grid Video Slice",
  args: {
    slice: GridVideoSliceFixture,
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

export const GridVideoSlice = {};
