import type { Meta, Story } from "@storybook/react";

import { Brick as BrickComponent, BrickProps } from ".";

export default {
  component: BrickComponent,
  title: "Components/Brick",
  args: {
    icon: ["https://via.placeholder.com/300x300?text=icon"],
    title: "Brick",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
}: BrickStoryProps) => <BrickComponent icon={icon[0]} {...args} />;

export const Brick = Template.bind({});
