import type { Meta, Story } from "@storybook/react";

import {
  CallToAction as CallToActionComponent,
  CallToActionProps,
} from "./CallToAction";

export default {
  component: CallToActionComponent,
  title: "Components/Call To Action",
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
  <CallToActionComponent {...args}>
    <a>
      <span>{children}</span>
    </a>
  </CallToActionComponent>
);

export const CallToAction = Template.bind({});
