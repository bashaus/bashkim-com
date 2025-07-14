import newspaperSliceFactory from "@bashkim-com/prismic-factories/newspaperSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import NewspaperSlice from ".";

const meta = {
  component: NewspaperSlice,
  title: "Prismic slices/Newspaper Slice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} satisfies Meta<typeof NewspaperSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: newspaperSliceFactory.build(),
  },
} satisfies Story;

export default meta;
