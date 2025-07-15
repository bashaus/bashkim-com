import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import Tile, { TileProps } from ".";

type TileRendererProps = Omit<
  Readonly<
    TileProps & {
      _icon: Array<string>;
      _poster: Array<string>;
    }
  >,
  "icon" | "poster"
>;

const TileRenderer = ({ _icon, _poster, ...props }: TileRendererProps) => (
  <Tile {...props} icon={<img alt="" src={_icon[0]} />} poster={_poster[0]} />
);

const meta = {
  component: Tile,
  title: "Components/Tile",
  argTypes: {
    _icon: { control: "file", name: "icon" },
    _poster: { control: "file", name: "poster" },
  },
  parameters: {
    layout: "centered",
  },
  render: TileRenderer,
} satisfies Meta<TileRendererProps>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    title: faker.lorem.words(2),
    description: faker.lorem.sentence(6),
    _icon: [placeholderImage({ width: 300, height: 300, text: "icon" })],
    _poster: [placeholderImage({ width: 640, height: 360, text: "poster" })],
  },
} satisfies Story;

export default meta;
