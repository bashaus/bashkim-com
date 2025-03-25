import captionedVideoSliceFactory from "@bashkim-com/prismic-factories/captionedVideoSliceFactory";
import type { Meta } from "@storybook/react";

import CaptionedVideoSliceComponent from ".";

export default {
  component: CaptionedVideoSliceComponent,
  title: "Prismic slices/Captioned Video Slice",
  args: {
    slice: captionedVideoSliceFactory.build(),
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
