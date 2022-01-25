import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { NewspaperPartial, NewspaperPartialProps } from ".";

export default {
  component: NewspaperPartial,
  title: "Partials/NewspaperPartial",
  args: {
    paragraphs: 10,
  },
  argTypes: {
    paragraphs: {
      control: "number",
      min: 1,
      max: 100,
      table: { category: "Story helpers" },
    },
  },
} as Meta;

type NewspaperPartialStoryProps = NewspaperPartialProps & {
  paragraphs: number;
};

const Template: Story<NewspaperPartialStoryProps> = ({
  paragraphs,
  ...args
}: NewspaperPartialStoryProps) => (
  <NewspaperPartial {...args}>
    {Array(paragraphs)
      .fill("")
      .map((_value, index) => (
        <div key={index}>
          Paragraph {index + 1}: {faker.lorem.paragraph()}
        </div>
      ))}
  </NewspaperPartial>
);

export const Render = Template.bind({});
