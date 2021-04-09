import React from "react";
import ComponentDecorator from "%storybook/decorators/component";

import { NavigationProvider } from "%contexts/Navigation/provider";

import MenuSignifierButton from ".";

export default {
  title: "Components/MenuSignifierButton",
  decorators: [ComponentDecorator],
};

export const Render = (): JSX.Element => (
  <NavigationProvider>
    <MenuSignifierButton />
  </NavigationProvider>
);
