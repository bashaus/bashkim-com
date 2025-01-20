import type { Meta } from "@storybook/react";

import VideoDialogComponent from ".";

export default {
  component: VideoDialogComponent,
  title: "Components/Video Dialog",
  args: {
    isOpen: true,
    url: "https://youtu.be/aqz-KE-bpKQ",
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const VideoDialog = {};
