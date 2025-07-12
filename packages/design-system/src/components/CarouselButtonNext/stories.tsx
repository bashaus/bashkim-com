import type { Meta } from "@storybook/nextjs";
import { fn } from "storybook/test";

import CarouselButtonNext from ".";

export default {
  component: CarouselButtonNext,
  title: "Components/CarouselButtonNext",
  args: {
    onClick: fn(),
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Enabled = {
  args: {
    disabled: false,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
