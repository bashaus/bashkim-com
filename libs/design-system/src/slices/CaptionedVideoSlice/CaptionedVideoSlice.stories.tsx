import { CaptionedVideoSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta } from "@storybook/react";

import { CaptionedVideoSlice as CaptionedVideoSliceComponent } from "./CaptionedVideoSlice";

export default {
  component: CaptionedVideoSliceComponent,
  title: "Prismic slices/Captioned Video Slice",
  args: {
    slice: CaptionedVideoSliceFixture,
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

export const CaptionedVideoSlice = {};
