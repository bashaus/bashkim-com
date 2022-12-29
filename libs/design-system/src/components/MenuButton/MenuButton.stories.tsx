import type { Meta, Story } from "@storybook/react";

import { ReactComponent as TrophyVector } from "../../assets/vectors/trophy.svg";
import {
  MenuButton as MenuButtonComponent,
  MenuButtonProps,
} from "./MenuButton";

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

const Template: Story<MenuButtonProps> = (args) => (
  <MenuButtonComponent {...args} />
);

export const Text = Template.bind({});
Text.args = {
  children: "Menu",
};

export const Vector = Template.bind({});
Vector.args = {
  children: <TrophyVector width={30} height={30} />,
};
