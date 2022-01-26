import type { Meta, Story } from "@storybook/react";
import faker from "faker";

import { Group as GroupComponent, GroupDesign, GroupProps } from ".";

export default {
  component: GroupComponent,
  title: "Layout/Group",
  args: {
    design: GroupDesign.DEFAULT,
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

type GroupStoryProps = GroupProps & {
  icon: Array<string>;
};

const Template: Story<GroupStoryProps> = (args: GroupStoryProps) => (
  <GroupComponent {...args}>
    <p>{faker.lorem.sentences(3)}</p>
  </GroupComponent>
);

export const Default = Template.bind({});
Default.args = {
  design: GroupDesign.DEFAULT,
};

export const Alternate = Template.bind({});
Alternate.args = {
  design: GroupDesign.ALTERNATE,
};
