import gridEmbedSliceFactory from "@bashkim-com/prismic-factories/gridEmbedSliceFactory";
import type { Meta } from "@storybook/nextjs";

import GridEmbedSlice from ".";

export default {
  component: GridEmbedSlice,
  title: "Prismic slices/Grid Embed Slice",
  args: {
    slice: gridEmbedSliceFactory.build(),
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
