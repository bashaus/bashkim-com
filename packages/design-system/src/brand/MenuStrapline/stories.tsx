import type { Meta, StoryObj } from "@storybook/nextjs";

import MenuStrapline from ".";

const meta = {
  component: MenuStrapline,
  title: "Brand/Menu Strapline",
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof MenuStrapline>;

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
