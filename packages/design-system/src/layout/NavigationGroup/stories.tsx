import React from "react";

import { NavigationItem } from "../NavigationItem";

import { NavigationGroup, NavigationGroupProps } from ".";

export default {
  component: NavigationGroup,
  title: "Layout/NavigationGroup",
};

const Template = ({ children, ...args }: NavigationGroupProps) => (
  <NavigationGroup {...args}>{children}</NavigationGroup>
);

export const Render = Template.bind({});
Render.args = {
  children: (
    <>
      <NavigationItem>
        <a href="#">One</a>
      </NavigationItem>
      <NavigationItem>
        <a href="#">Two</a>
      </NavigationItem>
      <NavigationItem>
        <a href="#">Three</a>
      </NavigationItem>
    </>
  ),
};
