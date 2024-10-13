import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import type { Meta } from "@storybook/react";

import { Switch as SwitchComponent } from ".";

export default {
  component: SwitchComponent,
  title: "Components/Switch",
  args: {
    iconOff: <DarkModeIcon />,
    iconOn: <LightModeIcon />,
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
