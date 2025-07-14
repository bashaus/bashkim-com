import exhibitionSliceFactory from "@bashkim-com/prismic-factories/exhibitionSliceFactory";
import type { Meta, StoryObj } from "@storybook/nextjs";

import ExhibitionSlice from ".";

const meta = {
  component: ExhibitionSlice,
  title: "Prismic slices/Exhibition Slice",
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
} satisfies Meta<typeof ExhibitionSlice>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slice: exhibitionSliceFactory.build(),
  },
} satisfies Story;

export default meta;
