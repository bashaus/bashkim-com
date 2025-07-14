import gridVideoSliceFactory from "@bashkim-com/prismic-factories/gridVideoSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import GridVideoSlice from ".";

const meta = {
  component: GridVideoSlice,
  title: "Prismic slices/Grid Video Slice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} satisfies Meta<typeof GridVideoSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: gridVideoSliceFactory.build(),
  },
} satisfies Story;

export default meta;
