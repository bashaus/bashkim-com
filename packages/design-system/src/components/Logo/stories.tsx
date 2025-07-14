import type { Meta, StoryObj } from "@storybook/nextjs";

import Logo from ".";

const meta = {
  component: Logo,
  title: "Components/Logo",
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Logo>;

type Story = StoryObj<typeof meta>;

export const Static = {
  args: {
    animated: false,
  },
} satisfies Story;

export const Animated = {
  args: {
    animated: true,
  },
} satisfies Story;

export default meta;
