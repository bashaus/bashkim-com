import type { Meta } from "@storybook/nextjs";

import VideoPlayer from ".";

export default {
  component: VideoPlayer,
  title: "Components/Video Player",
  args: {
    url: "https://youtu.be/aqz-KE-bpKQ",
  },
  parameters: {
    layout: "padded",
  },
} as Meta;

export const Fixture = {};
