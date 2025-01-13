import { CaptionedImageSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta } from "@storybook/react";

import CaptionedImageSliceComponent from ".";

export default {
  component: CaptionedImageSliceComponent,
  title: "Prismic slices/Captioned Image Slice",
  args: {
    slice: CaptionedImageSliceFixture,
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

export const CaptionedImageSlice = {};
