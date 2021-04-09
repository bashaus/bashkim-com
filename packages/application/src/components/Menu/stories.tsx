import Menu from ".";
import MenuBackButtonHomeImpl from "%components/MenuBackButtonHomeImpl";
import MenuBackButtonPortfolioImpl from "%components/MenuBackButtonPortfolioImpl";

import { NavigationProvider } from "%contexts/Navigation/provider";

export default {
  title: "Components/Menu",
};

export const Render = (): JSX.Element => (
  <NavigationProvider>
    <Menu />
  </NavigationProvider>
);

export const Home = (): JSX.Element => (
  <NavigationProvider>
    <Menu backButton={MenuBackButtonHomeImpl} />
  </NavigationProvider>
);

export const Portfolio = (): JSX.Element => (
  <NavigationProvider>
    <Menu backButton={MenuBackButtonPortfolioImpl} />
  </NavigationProvider>
);
