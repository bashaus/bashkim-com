import { Menu, MenuProps } from ".";
import { MenuBackButtonHomeImpl } from "%components/MenuBackButtonHomeImpl";
import { MenuBackButtonPortfolioImpl } from "%components/MenuBackButtonPortfolioImpl";

import { NavigationProvider } from "%contexts/Navigation/provider";

export default {
  component: Menu,
  title: "Components/Menu",
};

const Template = ({ ...args }: MenuProps) => (
  <NavigationProvider>
    <Menu {...args} />
  </NavigationProvider>
);

export const Render = Template.bind({});
Render.args = {
  backButton: undefined,
};

export const Home = Template.bind({});
Home.args = {
  backButton: MenuBackButtonHomeImpl,
};

export const Portfolio = Template.bind({});
Portfolio.args = {
  backButton: MenuBackButtonPortfolioImpl,
};
