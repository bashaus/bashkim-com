import { MoonIcon, SunIcon } from "@primer/octicons-react";
import type { Meta, Story } from "@storybook/react";

import { Switch as SwitchComponent, SwitchProps } from "./Switch";

export default {
  component: SwitchComponent,
  title: "Components/Switch",
  args: {
    iconOff: <MoonIcon />,
    iconOn: <SunIcon />,
  },
  argTypes: {
    onChange: { action: "onChange" },
    checked: {
      type: "boolean",
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<SwitchProps> = (args: SwitchProps) => (
  <SwitchComponent {...args} />
);

export const Switch = Template.bind({});
