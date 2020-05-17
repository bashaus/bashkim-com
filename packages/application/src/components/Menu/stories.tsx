import React from "react";

import Menu from ".";
import MenuBackButtonHomeImpl from "%components/MenuBackButtonHomeImpl";
import MenuBackButtonPortfolioImpl from "%components/MenuBackButtonPortfolioImpl";
import NavigationStore from "%contexts/Navigation";

export default {
  title: "Components/Menu",
};

export const Render = (): JSX.Element => (
  <NavigationStore>
    <Menu />
  </NavigationStore>
);

export const Home = (): JSX.Element => (
  <NavigationStore>
    <Menu backButton={MenuBackButtonHomeImpl} />
  </NavigationStore>
);

export const Portfolio = (): JSX.Element => (
  <NavigationStore>
    <Menu backButton={MenuBackButtonPortfolioImpl} />
  </NavigationStore>
);
