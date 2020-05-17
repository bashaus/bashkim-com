import React from "react";
import ComponentDecorator from "%storybook/decorators/component";

import NavigationStore from "%contexts/Navigation";
import MenuSignifierButton from ".";

export default {
  title: "Components/MenuSignifierButton",
  decorators: [ComponentDecorator],
};

export const Render = (): JSX.Element => (
  <NavigationStore>
    <MenuSignifierButton />
  </NavigationStore>
);
