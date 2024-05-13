import type { Meta, StoryFn } from "@storybook/react";

import { NavigationItem } from "../NavigationItem";
import {
  NavigationGroup as NavigationGroupComponent,
  NavigationGroupProps,
} from ".";

export default {
  component: NavigationGroupComponent,
  title: "Layout/Navigation Group",
  args: {
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
  },
} as Meta;

const Template: StoryFn<NavigationGroupProps> = ({
  ...args
}: NavigationGroupProps) => <NavigationGroupComponent {...args} />;

export const NavigationGroup = {
  render: Template,
};
