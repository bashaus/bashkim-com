import React from "react";

import { FooterLinks } from "../FooterLinks";

import { FooterColumn, FooterColumnProps } from ".";

export default {
  component: FooterColumn,
  title: "Layout/FooterColumn",
};

const Template = (args: FooterColumnProps) => (
  <FooterColumn {...args}>
    <FooterLinks>
      <li>Menu item #1</li>
      <li>Menu item #2</li>
    </FooterLinks>
  </FooterColumn>
);

export const Render = Template.bind({});
Render.args = {
  label: "Label",
};
