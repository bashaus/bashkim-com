import faker from "faker";

import { Tile, TileProps } from ".";

export default {
  component: Tile,
  title: "Components/Tile",
  argTypes: {
    icon: { control: "file" },
    poster: { control: "file" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = ({ icon, poster, ...args }: TileProps) => (
  <div style={{ maxWidth: 200, width: "100vw" }}>
    <Tile {...args} icon={icon[0]} poster={poster[0]} />
  </div>
);

export const Render = Template.bind({});
Render.args = {
  title: "Tile",
  description: faker.lorem.sentence(8),
  icon: ["https://via.placeholder.com/300x300?text=icon"],
  poster: ["https://via.placeholder.com/640x360?text=poster"],
};
