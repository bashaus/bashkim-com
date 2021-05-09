import faker from "faker";

import { PartialTitle, PartialTitleProps } from ".";

export default {
  component: PartialTitle,
  title: "Partials/Title",
  argTypes: {
    image: { control: "file" },
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};

type PartialTitleStoryProps = PartialTitleProps & {
  image: Array<string>;
  title: string;
  subtitle: string;
};

const Template = ({
  image,
  title,
  subtitle,
  ...args
}: PartialTitleStoryProps) => (
  <PartialTitle image={image[0]} {...args}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </PartialTitle>
);

export const Render = Template.bind({});
Render.args = {
  image: ["https://via.placeholder.com/300x300?text=image"],
  title: "PartialTitle",
  subtitle: faker.lorem.sentence(8),
};
