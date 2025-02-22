import type { Meta } from "@storybook/react";

import GroupComponent from ".";
import { GroupDesign } from "./types";

export default {
  component: GroupComponent,
  title: "Layout/Group",
  args: {
    design: GroupDesign.Default,
    children: <p>Nulla facilisi. Vivamus ac fringilla urna. Praesent in.</p>,
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = {
  args: {
    design: GroupDesign.Default,
  },
};

export const Alternate = {
  args: {
    design: GroupDesign.Alternate,
  },
};
