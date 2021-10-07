import faker from "faker";

import { PartialHeaderText, PartialHeaderTextProps } from ".";

export default {
  component: PartialHeaderText,
  title: "Partials/Header Text",
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};

type PartialHeaderTextStoryProps = PartialHeaderTextProps & {
  title: string;
  subtitle: string;
};

const Template = ({
  title,
  subtitle,
  ...args
}: PartialHeaderTextStoryProps) => (
  <PartialHeaderText {...args}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </PartialHeaderText>
);

export const Render = Template.bind({});
Render.args = {
  title: "PartialHeaderText",
  subtitle: faker.lorem.sentence(8),
};
