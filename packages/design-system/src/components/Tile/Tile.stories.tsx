import type { Meta, StoryFn } from "@storybook/react";

import { Tile as TileComponent, TileProps } from "./Tile";

export default {
  component: TileComponent,
  title: "Components/Tile",
  args: {
    title: "Tile",
    description: "Cras sit amet purus commodo, semper dui non.",
    icon: ["https://via.placeholder.com/300x300.png?text=icon"],
    poster: ["https://via.placeholder.com/640x360.png?text=poster"],
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

const Template: StoryFn<TileStoryProps> = ({
  icon,
  poster,
  ...args
}: TileStoryProps) => (
  <TileComponent {...args} icon={icon[0]} poster={poster[0]} />
);

export const Tile = {
  render: Template,
};
