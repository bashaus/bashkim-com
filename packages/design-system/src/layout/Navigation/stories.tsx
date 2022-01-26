import type { Meta, Story } from "@storybook/react";

import { NavigationGroup } from "../NavigationGroup";
import { NavigationItem } from "../NavigationItem";
import { Navigation as NavigationComponent, NavigationProps } from ".";

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

const Template: Story<NavigationProps> = (args: NavigationProps) => (
  <NavigationComponent {...args} />
);

export const Navigation = Template.bind({});
