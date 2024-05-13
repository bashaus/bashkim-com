import { MoonIcon, SunIcon } from "@primer/octicons-react";
import type { Meta } from "@storybook/react";

import { Switch as SwitchComponent } from ".";

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

export const Switch = {};
