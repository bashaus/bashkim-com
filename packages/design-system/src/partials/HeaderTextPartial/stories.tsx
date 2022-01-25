import { Meta, Story } from "@storybook/react";
import faker from "faker";

import {
  HeaderTextPartial as HeaderTextPartialComponent,
  HeaderTextPartialProps,
} from ".";

export default {
  component: HeaderTextPartialComponent,
  title: "Partials/Header Text Partial",
  args: {
    title: "HeaderTextPartial",
    subtitle: faker.lorem.sentence(8),
  },
  argTypes: {
    title: {
      control: "text",
      table: { category: "Story helpers" },
    },
    subtitle: {
      control: "text",
      table: { category: "Story helpers" },
    },
  },
} as Meta;

type HeaderTextPartialStoryProps = HeaderTextPartialProps & {
  title: string;
  subtitle: string;
};

const Template: Story<HeaderTextPartialStoryProps> = ({
  title,
  subtitle,
  ...args
}: HeaderTextPartialStoryProps) => (
  <HeaderTextPartialComponent {...args}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </HeaderTextPartialComponent>
);

export const HeaderTextPartial = Template.bind({});
