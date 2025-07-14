import accoladeSliceFactory from "@bashkim-com/prismic-factories/accoladeSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import AccoladeSlice from ".";

const meta = {
  component: AccoladeSlice,
  title: "Prismic slices/Accolade Slice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} satisfies Meta<typeof AccoladeSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: accoladeSliceFactory.build(),
  },
} satisfies Story;

export default meta;
