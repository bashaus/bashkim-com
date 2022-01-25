import { Meta, Story } from "@storybook/react";

import { NavigationItem } from "../NavigationItem";
import { NavigationGroup, NavigationGroupProps } from ".";

export default {
  component: NavigationGroup,
  title: "Layout/NavigationGroup",
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

const Template: Story<NavigationGroupProps> = ({
  ...args
}: NavigationGroupProps) => <NavigationGroup {...args} />;

export const Render = Template.bind({});
