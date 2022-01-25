import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { HeaderTextPartial, HeaderTextPartialProps } from ".";

export default {
  component: HeaderTextPartial,
  title: "Partials/HeaderTextPartial",
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
  <HeaderTextPartial {...args}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </HeaderTextPartial>
);

export const Render = Template.bind({});
