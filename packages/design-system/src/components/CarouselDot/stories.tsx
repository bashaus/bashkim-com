import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

import CarouselDot from ".";

const meta = {
  component: CarouselDot,
  title: "Components/Carousel Dot",
  args: {
    onClick: fn(),
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CarouselDot>;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    "aria-current": false,
  },
} satisfies Story;

export const Current = {
  args: {
    "aria-current": true,
  },
} satisfies Story;

export default meta;
