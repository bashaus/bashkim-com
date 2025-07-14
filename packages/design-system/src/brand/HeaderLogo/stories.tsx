import type { Meta, StoryObj } from "@storybook/nextjs";

import HeaderLogo from ".";

const meta = {
  component: HeaderLogo,
  title: "Brand/Header Logo",
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof HeaderLogo>;

type Story = StoryObj<typeof meta>;

export const Animated = {
  args: {
    animated: true,
  },
} satisfies Story;

export const Static = {
  args: {
    animated: false,
  },
} satisfies Story;

export default meta;
