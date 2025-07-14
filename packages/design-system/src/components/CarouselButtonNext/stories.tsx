import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

import CarouselButtonNext from ".";

const meta = {
  component: CarouselButtonNext,
  title: "Components/Carousel Button Next",
  args: {
    onClick: fn(),
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CarouselButtonNext>;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  args: {
    disabled: false,
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export default meta;
