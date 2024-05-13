import type { Meta } from "@storybook/react";

import { VideoPlayer as VideoPlayerComponent } from ".";

export default {
  component: VideoPlayerComponent,
  title: "Components/Video Player",
  args: {
    url: "https://youtu.be/aqz-KE-bpKQ",
  },
  parameters: {
    layout: "padded",
  },
} as Meta;

export const VideoPlayer = {};
