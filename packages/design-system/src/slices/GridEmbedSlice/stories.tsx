import gridEmbedSliceFactory from "@bashkim-com/prismic-factories/gridEmbedSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import GridEmbedSlice from ".";

const meta = {
  component: GridEmbedSlice,
  title: "Prismic slices/Grid Embed Slice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} satisfies Meta<typeof GridEmbedSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: gridEmbedSliceFactory.build(),
  },
} satisfies Story;

export default meta;
