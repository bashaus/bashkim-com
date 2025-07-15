import type { Meta, StoryObj } from "@storybook/nextjs";

import SquareLogo from ".";

const meta = {
  component: SquareLogo,
  title: "Brand/Square Logo",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SquareLogo>;

type Story = StoryObj<typeof meta>;

const width = 72;

export const Zoom1x = {
  name: "1x",
  args: { width: width * 1 },
} satisfies Story;

export const Zoom2x = {
  name: "2x",
  args: { width: width * 2 },
} satisfies Story;

export const Zoom3x = {
  name: "3x",
  args: { width: width * 3 },
} satisfies Story;

export default meta;
