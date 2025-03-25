import newspaperSliceFactory from "@bashkim-com/prismic-factories/newspaperSliceFactory";
import type { Meta } from "@storybook/react";

import NewspaperSliceComponent from ".";

export default {
  component: NewspaperSliceComponent,
  title: "Prismic slices/Newspaper Slice",
  args: {
    slice: newspaperSliceFactory.build(),
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

export const NewspaperSlice = {};
