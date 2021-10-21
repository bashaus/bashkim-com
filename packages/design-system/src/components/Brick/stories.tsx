import faker from "faker";

import { Brick, BrickProps } from ".";

export default {
  component: Brick,
  title: "Components/Brick",
  argTypes: {
    icon: { control: "file" },
  },
  parameters: {
    layout: "centered",
  },
};

type BrickStoryProps = BrickProps & {
  icon: Array<string>;
};

const Template = ({ icon, ...args }: BrickStoryProps): JSX.Element => (
  <Brick icon={icon[0]} {...args} />
);

export const Render = Template.bind({});
Render.args = {
  icon: ["https://via.placeholder.com/300x300?text=icon"],
  title: "Brick",
  description: faker.lorem.sentence(8),
};
