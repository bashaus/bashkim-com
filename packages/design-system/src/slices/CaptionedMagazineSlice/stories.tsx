import { CaptionedMagazineSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta } from "@storybook/react";

import CaptionedMagazineSliceComponent from ".";

export default {
  component: CaptionedMagazineSliceComponent,
  title: "Prismic slices/Captioned Magazine Slice",
  args: {
    slice: CaptionedMagazineSliceFixture,
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

export const CaptionedMagazineSlice = {};
