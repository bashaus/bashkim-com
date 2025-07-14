import subtitleSliceFactory from "@bashkim-com/prismic-factories/subtitleSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import SubtitleSlice from ".";

const meta = {
  component: SubtitleSlice,
  title: "Prismic slices/Subtitle Slice",
  argTypes: {
    slice: {
      control: "object",
      table: { category: "Prismic fixture" },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
} satisfies Meta<typeof SubtitleSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: subtitleSliceFactory.build(),
  },
} satisfies Story;

export default meta;
