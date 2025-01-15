import type { Meta, StoryFn } from "@storybook/react";
import { placeholderImage } from "placeholder-image-data-url-svg";

import TileComponent, { TileProps } from ".";

export default {
  component: TileComponent,
  title: "Components/Tile",
  args: {
    title: "Tile",
    description: "Cras sit amet purus commodo, semper dui non.",
    icon: [placeholderImage({ width: 300, height: 300, text: "icon" })],
    poster: [placeholderImage({ width: 640, height: 360, text: "poster" })],
  },
  argTypes: {
    icon: { control: "file" },
    poster: { control: "file" },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export type TileStoryProps = Readonly<
  Omit<TileProps, "icon" | "poster"> & {
    icon: Array<string>;
    poster: Array<string>;
  }
>;

const Template: StoryFn<TileStoryProps> = ({
  icon,
  poster,
  ...args
}: TileStoryProps) => (
  <TileComponent {...args} icon={<img src={icon[0]} />} poster={poster[0]} />
);

export const Tile = {
  render: Template,
};
