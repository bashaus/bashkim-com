import captionedScreenshotsSliceFactory from "@bashkim-com/prismic-factories/captionedScreenshotsSliceFactory";
import type { Meta } from "@storybook/react";

import CaptionedScreenshotsSliceComponent from ".";

export default {
  component: CaptionedScreenshotsSliceComponent,
  title: "Prismic slices/Captioned Screenshots Slice",
  args: {
    slice: captionedScreenshotsSliceFactory.build(),
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

export const CaptionedScreenshotsSlice = {};
