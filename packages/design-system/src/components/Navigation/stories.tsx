import React from "react";

import { NavigationItem } from "../NavigationItem";
import { NavigationGroup } from "../NavigationGroup";
import { Navigation, NavigationProps } from ".";

export default {
  component: Navigation,
  title: "Navigation/Navigation",
};

const Template = ({ children, ...args }: NavigationProps) => (
  <Navigation {...args}>{children}</Navigation>
);

export const Render = Template.bind({});
Render.args = {
  children: (
    <>
      <NavigationGroup>
        <NavigationItem>
          <a href="#">One</a>
        </NavigationItem>
        <NavigationItem>
          <a href="#">Two</a>
        </NavigationItem>
        <NavigationItem>
          <a href="#">Three</a>
        </NavigationItem>
      </NavigationGroup>
      <NavigationGroup>
        <NavigationItem>
          <a href="#">Alpha</a>
        </NavigationItem>
        <NavigationItem>
          <a href="#">Beta</a>
        </NavigationItem>
        <NavigationItem>
          <a href="#">Gamma</a>
        </NavigationItem>
      </NavigationGroup>
    </>
  ),
};
