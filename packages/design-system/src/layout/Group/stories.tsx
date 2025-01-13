import type { Meta, StoryFn } from "@storybook/react";

import GroupComponent, { GroupProps } from ".";
import { GroupDesign } from "./types";

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

const Template: StoryFn<GroupStoryProps> = (args: GroupStoryProps) => (
  <GroupComponent {...args}>
    <p>Nulla facilisi. Vivamus ac fringilla urna. Praesent in. {args.design}</p>
  </GroupComponent>
);

export const Default = {
  render: Template,

  args: {
    design: GroupDesign.DEFAULT,
  },
};

export const Alternate = {
  render: Template,

  args: {
    design: GroupDesign.ALTERNATE,
  },
};
