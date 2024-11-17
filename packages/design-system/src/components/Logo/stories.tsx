import type { Meta, Story } from "@storybook/react";

import { Logo as LogoComponent } from ".";

export default {
  component: LogoComponent,
  title: "Components/Logo",
  args: {},
  parameters: {
    layout: "padded",
  },
} as Meta;

export const Logo: Story = {};

export const Animated: Story = {
  args: {
    animated: true,
  },
};
