import type { Meta, StoryFn } from "@storybook/react";

import {
  VideoModal as VideoModalComponent,
  VideoModalProps,
} from "./VideoModal";

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
