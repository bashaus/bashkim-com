import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { FullTextPartial, FullTextPartialProps } from ".";

export default {
  component: FullTextPartial,
  title: "Partials/FullTextPartial",
  args: {
    title: "FullTextPartial",
  },
  argTypes: {
    title: {
      control: "text",
      table: { category: "Story helpers" },
    },
  },
} as Meta;

type FullTextPartialStoryProps = FullTextPartialProps & {
  title: string;
};

const Template: Story<FullTextPartialStoryProps> = ({
  title,
  ...args
}: FullTextPartialStoryProps) => (
  <FullTextPartial {...args}>
    <h3>{title}</h3>
    {Array(6)
      .fill("")
      .map((_value, index) => (
        <p key={index}>{faker.lorem.paragraph()}</p>
      ))}
  </FullTextPartial>
);

export const Render = Template.bind({});
