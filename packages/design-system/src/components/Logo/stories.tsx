import type { Meta } from "@storybook/react";

import { Logo as LogoComponent } from ".";

export default {
  component: LogoComponent,
  title: "Components/Logo",
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Logo = {};
