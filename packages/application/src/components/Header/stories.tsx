import { Header } from ".";

import { NavigationProvider } from "%contexts/Navigation/provider";

export default {
  title: "Components/Header",
};

export const Render = (): JSX.Element => (
  <NavigationProvider>
    <Header theme="default" />
  </NavigationProvider>
);
