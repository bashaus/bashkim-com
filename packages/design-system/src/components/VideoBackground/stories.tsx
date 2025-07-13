import type { Meta } from "@storybook/nextjs";

import VideoBackground from ".";

export default {
  component: VideoBackground,
  title: "Components/Video Background",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Vimeo = {
  args: {
    url: "https://vimeo.com/1067276219",
  },
} as Meta;
