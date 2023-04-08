import { SubtitleSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta } from "@storybook/react";

import { SubtitleSlice as SubtitleSliceComponent } from "./SubtitleSlice";

export default {
  component: SubtitleSliceComponent,
  title: "Prismic slices/Subtitle Slice",
  args: {
    slice: SubtitleSliceFixture,
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

export const SubtitleSlice = {};
