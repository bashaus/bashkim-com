import type { Meta } from "@storybook/react";

import { VideoModal as VideoModalComponent } from ".";

export default {
  component: VideoModalComponent,
  title: "Components/Video Modal",
  args: {
    isOpen: true,
    url: "https://youtu.be/aqz-KE-bpKQ",
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const VideoModal = {};
