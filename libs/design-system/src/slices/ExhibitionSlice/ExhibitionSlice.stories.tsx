import { ExhibitionSliceFixture } from "@bashkim-com/prismic-fixtures";
import type { Meta } from "@storybook/react";

import { ExhibitionSlice as ExhibitionSliceComponent } from "./ExhibitionSlice";

export default {
  component: ExhibitionSliceComponent,
  title: "Prismic slices/Exhibition Slice",
  args: {
    slice: ExhibitionSliceFixture,
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

export const ExhibitionSlice = {};
