import faker from "faker";

import { Group, GroupDesign, GroupProps } from ".";

export default {
  component: Group,
  title: "Layout/Group",
  parameters: {
    layout: "fullscreen",
  },
};

type GroupStoryProps = GroupProps & {
  icon: Array<string>;
};

const Template = (args: GroupStoryProps): JSX.Element => (
  <Group {...args}>
    <p>{faker.lorem.sentences(3)}</p>
  </Group>
);

export const Default = Template.bind({});
Default.args = {
  design: GroupDesign.DEFAULT,
};

export const Alternate = Template.bind({});
Alternate.args = {
  design: GroupDesign.ALTERNATE,
};
