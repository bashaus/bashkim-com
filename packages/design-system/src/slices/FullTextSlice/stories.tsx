import fullTextSliceFactory from "@bashkim-com/prismic-factories/fullTextSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import FullTextSlice from ".";

const meta = {
  component: FullTextSlice,
  title: "Prismic slices/Full Text Slice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} satisfies Meta<typeof FullTextSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: fullTextSliceFactory.build(),
  },
} satisfies Story;

export default meta;
