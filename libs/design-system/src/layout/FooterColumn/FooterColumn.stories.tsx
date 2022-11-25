import type { Meta, Story } from "@storybook/react";

import { FooterLinks } from "../FooterLinks/FooterLinks";
import {
  FooterColumn as FooterColumnComponent,
  FooterColumnProps,
} from "./FooterColumn";

export default {
  component: FooterColumnComponent,
  title: "Layout/Footer Column",
  args: {
    label: "Label",
  },
} as Meta;

const Template: Story<FooterColumnProps> = (args: FooterColumnProps) => (
  <FooterColumnComponent {...args}>
    <FooterLinks>
      <li>
        <a href="#">Menu item #1</a>
      </li>
      <li>
        <a href="#">Menu item #2</a>
      </li>
    </FooterLinks>
  </FooterColumnComponent>
);

export const FooterColumn = Template.bind({});
