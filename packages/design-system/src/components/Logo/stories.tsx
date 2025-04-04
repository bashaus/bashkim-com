import type { Meta } from "@storybook/react";

import Logo from ".";

export default {
  component: Logo,
  title: "Components/Logo",
  args: {},
  parameters: {
    layout: "padded",
  },
} as Meta;

export const Static = {
  args: {
    animated: false,
  },
};

export const Animated = {
  args: {
    animated: true,
  },
};
