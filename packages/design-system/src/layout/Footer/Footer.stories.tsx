import type { Meta, StoryFn } from "@storybook/react";

import { FooterColumn } from "../FooterColumn/FooterColumn";
import { FooterGroup } from "../FooterGroup/FooterGroup";
import { FooterLinks } from "../FooterLinks/FooterLinks";
import { Footer as FooterComponent, FooterProps } from "./Footer";

export default {
  component: FooterComponent,
  title: "Layout/Footer",
  args: {},
} as Meta;

const Template: StoryFn<FooterProps> = (args: FooterProps) => (
  <FooterComponent {...args}>
    <FooterGroup>
      <FooterColumn label="Column one">
        <FooterLinks>
          <li>
            <a href="#">Menu item 1</a>
          </li>
        </FooterLinks>
      </FooterColumn>

      <FooterColumn label="Column two">
        <FooterLinks>
          <li>
            <a href="#">Menu item 1</a>
          </li>
        </FooterLinks>
      </FooterColumn>
    </FooterGroup>
  </FooterComponent>
);

export const Footer = {
  render: Template,
};
