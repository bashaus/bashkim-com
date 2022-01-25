import { Meta, Story } from "@storybook/react";

import { CallToAction, CallToActionProps } from ".";

export default {
  component: CallToAction,
  title: "Components/CallToAction",
  args: {
    children: "Call to action",
  },
  argTypes: {
    children: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<CallToActionProps> = ({
  children,
  ...args
}: CallToActionProps) => (
  <CallToAction {...args}>
    <a>
      <span>{children}</span>
    </a>
  </CallToAction>
);

export const Render = Template.bind({});
