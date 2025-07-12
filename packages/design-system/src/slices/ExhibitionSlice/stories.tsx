import exhibitionSliceFactory from "@bashkim-com/prismic-factories/exhibitionSliceFactory";
import type { Meta } from "@storybook/nextjs";

import ExhibitionSlice from ".";

export default {
  component: ExhibitionSlice,
  title: "Prismic slices/Exhibition Slice",
  args: {
    slice: exhibitionSliceFactory.build(),
  },
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    layout: "centered",
    controls: { expanded: false },
  },
} as Meta;

export const Fixture = {};
