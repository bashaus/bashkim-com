import type { Meta, StoryFn } from "@storybook/react";

import FooterLinks from "../FooterLinks";
import FooterColumnComponent, { FooterColumnProps } from ".";

export default {
  component: FooterColumnComponent,
  title: "Layout/Footer Column",
  args: {
    label: "Label",
  },
} as Meta;

const Template: StoryFn<FooterColumnProps> = (args: FooterColumnProps) => (
  <FooterColumnComponent {...args}>
    <FooterLinks>
      <li>
        <a href="#root">Menu item #1</a>
      </li>
      <li>
        <a href="#root">Menu item #2</a>
      </li>
    </FooterLinks>
  </FooterColumnComponent>
);

export const FooterColumn = {
  render: Template,
};
