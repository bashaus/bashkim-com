import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { TitlePartial, TitlePartialProps } from ".";

export default {
  component: TitlePartial,
  title: "Partials/TitlePartial",
  args: {
    image: ["https://via.placeholder.com/300x300?text=image"],
    title: "TitlePartial",
    subtitle: faker.lorem.sentence(8),
  },
  argTypes: {
    image: { control: "file" },
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

type TitlePartialStoryProps = Omit<TitlePartialProps, "image"> & {
  image: Array<string>;
  title: string;
  subtitle: string;
};

const Template: Story<TitlePartialStoryProps> = ({
  image,
  title,
  subtitle,
  ...args
}: TitlePartialStoryProps) => (
  <TitlePartial image={image[0]} {...args}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </TitlePartial>
);

export const Render = Template.bind({});
