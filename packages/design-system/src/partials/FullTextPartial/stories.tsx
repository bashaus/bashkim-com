import type { Meta, Story } from "@storybook/react";
import faker from "faker";

import {
  FullTextPartial as FullTextPartialComponent,
  FullTextPartialProps,
} from ".";

export default {
  component: FullTextPartialComponent,
  title: "Partials/Full Text Partial",
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
  <FullTextPartialComponent {...args}>
    <h3>{title}</h3>
    {Array(6)
      .fill("")
      .map((_value, index) => (
        <p key={index}>{faker.lorem.paragraph()}</p>
      ))}
  </FullTextPartialComponent>
);

export const FullTextPartial = Template.bind({});
