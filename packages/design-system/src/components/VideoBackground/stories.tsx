import type { Meta } from "@storybook/react";

import VideoBackgroundComponent from ".";

export default {
  component: VideoBackgroundComponent,
  title: "Components/Video Background",
  args: {
    url: "https://youtu.be/aqz-KE-bpKQ",
  },
  parameters: {
    layout: "padded",
  },
} as Meta;

export const VideoBackground = {};
