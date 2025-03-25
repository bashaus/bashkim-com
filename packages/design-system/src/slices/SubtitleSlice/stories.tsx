import subtitleSliceFactory from "@bashkim-com/prismic-factories/subtitleSliceFactory";
import type { Meta } from "@storybook/react";

import SubtitleSliceComponent from ".";

export default {
  component: SubtitleSliceComponent,
  title: "Prismic slices/Subtitle Slice",
  args: {
    slice: subtitleSliceFactory.build(),
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
