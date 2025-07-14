import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

import CarouselButtonBack from ".";

const meta = {
  component: CarouselButtonBack,
  title: "Components/Carousel Button Back",
  args: {
    onClick: fn(),
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CarouselButtonBack>;

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
