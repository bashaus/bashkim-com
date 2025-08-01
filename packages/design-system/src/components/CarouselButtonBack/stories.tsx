import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

import CarouselButtonBack from ".";

const meta = {
  component: CarouselButtonBack,
  title: "Components/Carousel Button Back",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CarouselButtonBack>;

type Story = StoryObj<typeof meta>;

export const Enabled = {
  args: {
    disabled: false,
    onClick: fn(),
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
    onClick: fn(),
  },
} satisfies Story;

export default meta;
