import type { Meta } from "@storybook/react";

import NavigationGroup from "../NavigationGroup";
import NavigationItem from "../NavigationItem";
import NavigationComponent from ".";

export default {
  component: NavigationComponent,
  title: "Layout/Navigation",
  args: {
    children: (
      <>
        <NavigationGroup>
          <NavigationItem>
            <a href="#root">One</a>
          </NavigationItem>
          <NavigationItem>
            <a href="#root">Two</a>
          </NavigationItem>
          <NavigationItem>
            <a href="#root">Three</a>
          </NavigationItem>
        </NavigationGroup>
        <NavigationGroup>
          <NavigationItem>
            <a href="#root">Alpha</a>
          </NavigationItem>
          <NavigationItem>
            <a href="#root">Beta</a>
          </NavigationItem>
          <NavigationItem>
            <a href="#root">Gamma</a>
          </NavigationItem>
        </NavigationGroup>
      </>
    ),
  },
} as Meta;

export const Navigation = {};
