import React from "react";
import { CallToAction, CallToActionProps } from ".";

export default {
  component: CallToAction,
  title: "Components/CallToAction",
  argTypes: {
    children: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = ({ children, ...args }: CallToActionProps) => (
  <CallToAction {...args}>
    <a>
      <span>{children}</span>
    </a>
  </CallToAction>
);

export const Render = Template.bind({});
Render.args = {
  children: "Call to action",
};
