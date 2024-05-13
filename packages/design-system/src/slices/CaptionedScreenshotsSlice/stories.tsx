import { CaptionedScreenshotsSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta } from "@storybook/react";

import { CaptionedScreenshotsSlice as CaptionedScreenshotsSliceComponent } from ".";

export default {
  component: CaptionedScreenshotsSliceComponent,
  title: "Prismic slices/Captioned Screenshots Slice",
  args: {
    slice: CaptionedScreenshotsSliceFixture,
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
