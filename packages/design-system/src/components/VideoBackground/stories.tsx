import type { Meta } from "@storybook/nextjs";

import VideoBackground from ".";

export default {
  component: VideoBackground,
  title: "Components/Video Background",
  args: {
    url: "https://vimeo.com/1067276219",
  },
  parameters: {
    layout: "padded",
  },
} as Meta;

export const Fixture = {};
