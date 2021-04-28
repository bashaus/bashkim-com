import React from "react";
import faker from "faker";

import { Brick, BrickProps } from ".";

export default {
  component: Brick,
  title: "Components/Brick",
  argTypes: {
    description: { control: "text" },
    icon: { control: "file" },
    title: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
};

type BrickStoryProps = BrickProps & {
  icon: Array<string>;
};

const Template = ({ icon, ...args }: BrickStoryProps): JSX.Element => (
  <Brick {...args} icon={icon[0]} />
);

export const Render = Template.bind({});
Render.args = {
  icon: ["https://via.placeholder.com/300x300?text=icon"],
  title: "Brick",
  description: faker.lorem.sentence(8),
};
