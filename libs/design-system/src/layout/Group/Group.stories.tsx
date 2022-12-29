import type { Meta, Story } from "@storybook/react";

import { Group as GroupComponent, GroupProps } from "./Group";
import { GroupDesign } from "./Group.types";

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
    <p>Nulla facilisi. Vivamus ac fringilla urna. Praesent in. {args.design}</p>
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
