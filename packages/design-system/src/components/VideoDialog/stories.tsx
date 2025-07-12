import type { Meta } from "@storybook/nextjs";

import VideoDialog from ".";

export default {
  component: VideoDialog,
  title: "Components/Video Dialog",
  args: {
    open: true,
    url: "https://youtu.be/aqz-KE-bpKQ",
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Fixture = {};
