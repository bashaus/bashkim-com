import type { Meta } from "@storybook/react";

import TrophyVector from "../../assets/vectors/trophy.svg";
import { MenuButton as MenuButtonComponent } from ".";

export default {
  component: MenuButtonComponent,
  title: "Components/MenuButton",
  args: {
    children: "Menu button",
  },
  argTypes: {
    children: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Text = {
  args: {
    children: "Menu",
  },
};

export const Vector = {
  args: {
    children: <TrophyVector width={30} height={30} viewBox="0 0 512 512" />,
  },
};
