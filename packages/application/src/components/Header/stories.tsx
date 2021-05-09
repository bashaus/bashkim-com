import { Header, HeaderProps } from ".";

import { NavigationProvider } from "%contexts/Navigation/provider";

export default {
  component: Header,
  title: "Components/Header",
};

const Template = ({ ...args }: HeaderProps) => (
  <NavigationProvider>
    <Header {...args} />
  </NavigationProvider>
);

export const Render = Template.bind({});
Render.args = {
  theme: "default",
};
