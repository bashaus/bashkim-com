import { Meta, Story } from "@storybook/react";

import { Logo, LogoProps } from ".";

export default {
  component: Logo,
  title: "Components/Logo",
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Render = Template.bind({});
