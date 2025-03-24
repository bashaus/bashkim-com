import type { Meta } from "@storybook/react";

import GroupComponent from ".";

export default {
  component: GroupComponent,
  title: "Layout/Group",
  args: {
    design: "default",
    children: <p>Nulla facilisi. Vivamus ac fringilla urna. Praesent in.</p>,
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = {
  args: {
    design: "default",
  },
};

export const Alternate = {
  args: {
    design: "alternate",
  },
};
