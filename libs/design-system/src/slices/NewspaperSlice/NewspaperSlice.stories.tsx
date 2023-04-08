import { NewspaperSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta } from "@storybook/react";

import { NewspaperSlice as NewspaperSliceComponent } from "./NewspaperSlice";

export default {
  component: NewspaperSliceComponent,
  title: "Prismic slices/Newspaper Slice",
  args: {
    slice: NewspaperSliceFixture,
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
