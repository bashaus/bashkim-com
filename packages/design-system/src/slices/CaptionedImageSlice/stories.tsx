import captionedImageSliceFactory from "@bashkim-com/prismic-factories/captionedImageSliceFactory";
import type { Meta } from "@storybook/react";

import CaptionedImageSlice from ".";

export default {
  component: CaptionedImageSlice,
  title: "Prismic slices/Captioned Image Slice",
  args: {
    slice: captionedImageSliceFactory.build(),
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
