import React from "react";
import faker from "faker";

import { PartialCaptioned, PartialCaptionedProps } from ".";

export default {
  component: PartialCaptioned,
  title: "Partials/Captioned",
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
};

type PartialCaptionedStoryProps = PartialCaptionedProps & {
  figure: Array<string>;
  title: string;
  subtitle: string;
};

const Template = ({
  title,
  subtitle,
  figure,
  ...args
}: PartialCaptionedStoryProps) => (
  <PartialCaptioned figure={<img src={figure[0]} alt="" />} {...args}>
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </PartialCaptioned>
);

export const Render = Template.bind({});
Render.args = {
  figure: ["https://via.placeholder.com/1200x630?text=figure"],
  title: "PartialCaptioned",
  subtitle: faker.lorem.paragraph(),
};
