import type { Meta, StoryFn } from "@storybook/react";

import { FooterColumn } from "../FooterColumn";
import { FooterGroup } from "../FooterGroup";
import { FooterLinks } from "../FooterLinks";
import { Footer as FooterComponent, FooterProps } from ".";

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
