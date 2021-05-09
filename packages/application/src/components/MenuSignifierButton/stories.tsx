import { NavigationProvider } from "%contexts/Navigation/provider";

import { MenuSignifierButton } from ".";

export default {
  component: MenuSignifierButton,
  title: "Components/MenuSignifierButton",
  parameters: {
    layout: "centered",
  },
};

const Template = ({ ...args }) => (
  <NavigationProvider>
    <MenuSignifierButton {...args} />
  </NavigationProvider>
);

export const Render = Template.bind({});
Render.args = {};
