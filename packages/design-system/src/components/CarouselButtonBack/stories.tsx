import type { Meta } from "@storybook/nextjs";
import { fn } from "storybook/test";

import CarouselButtonBack from ".";

export default {
  component: CarouselButtonBack,
  title: "Components/CarouselButtonBack",
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
