import faker from "faker";

import { HeaderTextPartial, HeaderTextPartialProps } from ".";

export default {
  component: HeaderTextPartial,
  title: "Partials/HeaderTextPartial",
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
};

type HeaderTextPartialStoryProps = HeaderTextPartialProps & {
  title: string;
  subtitle: string;
};

const Template = ({
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
Render.args = {
  title: "HeaderTextPartial",
  subtitle: faker.lorem.sentence(8),
};
