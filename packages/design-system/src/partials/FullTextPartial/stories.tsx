import faker from "faker";

import { FullTextPartial, FullTextPartialProps } from ".";

export default {
  component: FullTextPartial,
  title: "Partials/FullTextPartial",
  argTypes: {
    title: {
      control: "text",
      table: { category: "Story helpers" },
    },
  },
};

type FullTextPartialStoryProps = FullTextPartialProps & {
  title: string;
};

const Template = ({ title, ...args }: FullTextPartialStoryProps) => (
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
Render.args = {
  title: "FullTextPartial",
};
