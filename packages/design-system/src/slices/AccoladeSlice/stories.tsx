import accoladeSliceFactory from "@bashkim-com/prismic-factories/accoladeSliceFactory";
import type { Meta } from "@storybook/react";

import AccoladeSliceComponent from ".";

export default {
  component: AccoladeSliceComponent,
  title: "Prismic slices/Accolade Slice",
  args: {
    slice: accoladeSliceFactory.build(),
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

export const AccoladeSlice = {};
