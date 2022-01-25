import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { CaptionedPartial, CaptionedPartialProps } from ".";

export default {
  component: CaptionedPartial,
  title: "Partials/CaptionedPartial",
  args: {
    figure: ["https://via.placeholder.com/1200x630?text=figure"],
    title: "CaptionedPartial",
    subtitle: faker.lorem.paragraph(),
  },
  argTypes: {
    figure: { control: "file" },
    title: {
      control: "text",
      description: "Example of a title (within children)",
      table: { category: "Story helpers" },
    },
    subtitle: {
      control: "text",
      description: "Example of a subtitle (within children)",
      table: { category: "Story helpers" },
    },
  },
} as Meta;

type CaptionedPartialStoryProps = Omit<CaptionedPartialProps, "figure"> & {
  figure: Array<string>;
  title: string;
  subtitle: string;
};

const Template: Story<CaptionedPartialStoryProps> = ({
  title,
  subtitle,
  figure,
  ...args
}: CaptionedPartialStoryProps) => (
  <CaptionedPartial figure={<img src={figure[0]} alt="" />} {...args}>
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </CaptionedPartial>
);

export const Render = Template.bind({});
