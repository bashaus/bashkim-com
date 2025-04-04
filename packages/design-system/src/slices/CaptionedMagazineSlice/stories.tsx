import captionedMagazineSliceFactory from "@bashkim-com/prismic-factories/captionedMagazineSliceFactory";
import type { Meta } from "@storybook/react";

import CaptionedMagazineSlice from ".";

export default {
  component: CaptionedMagazineSlice,
  title: "Prismic slices/Captioned Magazine Slice",
  args: {
    slice: captionedMagazineSliceFactory.build(),
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
