import { FooterColumn } from "../FooterColumn";
import { FooterGroup } from "../FooterGroup";
import { FooterLinks } from "../FooterLinks";
import { Footer, FooterProps } from ".";

export default {
  component: Footer,
  title: "Layout/Footer",
};

const Template = (args: FooterProps) => (
  <Footer {...args}>
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
  </Footer>
);

export const Render = Template.bind({});
Render.args = {};
