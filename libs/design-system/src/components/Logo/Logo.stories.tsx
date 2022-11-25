import type { Meta, Story } from "@storybook/react";

import { Logo as LogoComponent, LogoProps } from "./Logo";

export default {
  component: LogoComponent,
  title: "Components/Logo",
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<LogoProps> = (args) => <LogoComponent {...args} />;

export const Logo = Template.bind({});
