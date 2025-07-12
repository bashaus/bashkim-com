import type { Meta } from "@storybook/nextjs";
import { fn } from "storybook/test";

import CarouselDot from ".";

export default {
  component: CarouselDot,
  title: "Components/CarouselDot",
  args: {
    onClick: fn(),
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Unselected = {
  args: {
    "aria-selected": false,
  },
};

export const Selected = {
  args: {
    "aria-selected": true,
  },
};
