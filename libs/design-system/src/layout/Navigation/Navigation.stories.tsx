import type { Meta, StoryFn } from "@storybook/react";

import { NavigationGroup } from "../NavigationGroup/NavigationGroup";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import {
  Navigation as NavigationComponent,
  NavigationProps,
} from "./Navigation";

export default {
  component: NavigationComponent,
  title: "Layout/Navigation",
  args: {
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
  },
} as Meta;

export const Navigation = {};
