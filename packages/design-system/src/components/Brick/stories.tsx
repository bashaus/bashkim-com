import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { Brick, BrickProps } from ".";

export default {
  component: Brick,
  title: "Components/Brick",
  args: {
    icon: ["https://via.placeholder.com/300x300?text=icon"],
    title: "Brick",
    description: faker.lorem.sentence(8),
  },
  argTypes: {
    icon: { control: "file" },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

type BrickStoryProps = Omit<BrickProps, "icon"> & {
  icon: Array<string>;
};

const Template: Story<BrickStoryProps> = ({
  icon,
  ...args
}: BrickStoryProps) => <Brick icon={icon[0]} {...args} />;

export const Render = Template.bind({});
