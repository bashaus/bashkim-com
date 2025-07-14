import type { Meta, StoryObj } from "@storybook/nextjs";

import InlineLogo from ".";

const meta = {
  component: InlineLogo,
  title: "Brand/Inline Logo",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InlineLogo>;

type Story = StoryObj<typeof meta>;

const width = 126;
const height = 36;

export const Zoom1x = {
  name: "1x",
  args: { width: width * 1, height: height * 1 },
} satisfies Story;

export const Zoom2x = {
  name: "2x",
  args: { width: width * 2, height: height * 2 },
} satisfies Story;

export const Zoom3x = {
  name: "3x",
  args: { width: width * 3, height: height * 3 },
} satisfies Story;

export default meta;
