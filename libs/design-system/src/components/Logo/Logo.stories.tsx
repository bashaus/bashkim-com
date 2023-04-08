import type { Meta, StoryFn } from "@storybook/react";

import { Logo as LogoComponent, LogoProps } from "./Logo";

export default {
  component: LogoComponent,
  title: "Components/Logo",
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Logo = {};
