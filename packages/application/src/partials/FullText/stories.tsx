import faker from "faker";

import { PartialFullText, PartialFullTextProps } from ".";

export default {
  component: PartialFullText,
  title: "Partials/Full Text",
  argTypes: {
    title: {
      control: "text",
      table: { category: "Story helpers" },
    },
  },
};

type PartialFullTextStoryProps = PartialFullTextProps & {
  title: string;
};

const Template = ({ title, ...args }: PartialFullTextStoryProps) => (
  <PartialFullText {...args}>
    <h3>{title}</h3>
    {Array(6)
      .fill("")
      .map((_value, index) => (
        <p key={index}>{faker.lorem.paragraph()}</p>
      ))}
  </PartialFullText>
);

export const Render = Template.bind({});
Render.args = {
  title: "PartialFullText",
};
