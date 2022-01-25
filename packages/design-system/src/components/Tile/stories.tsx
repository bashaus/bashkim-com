import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { Tile, TileProps } from ".";

export default {
  component: Tile,
  title: "Components/Tile",
  args: {
    title: "Tile",
    description: faker.lorem.sentence(8),
    icon: ["https://via.placeholder.com/300x300?text=icon"],
    poster: ["https://via.placeholder.com/640x360?text=poster"],
  },
  argTypes: {
    icon: { control: "file" },
    poster: { control: "file" },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export type TileStoryProps = Omit<TileProps, "icon" | "poster"> & {
  icon: Array<string>;
  poster: Array<string>;
};

const Template: Story<TileStoryProps> = ({
  icon,
  poster,
  ...args
}: TileStoryProps) => <Tile {...args} icon={icon[0]} poster={poster[0]} />;

export const Render = Template.bind({});
