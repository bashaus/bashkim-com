import type { Meta, StoryObj } from "@storybook/nextjs";

import VideoBackground from ".";

const meta = {
  component: VideoBackground,
  title: "Video/Video Background",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof VideoBackground>;

type Story = StoryObj<typeof meta>;

export const Vimeo = {
  args: {
    url: "https://vimeo.com/1067276219",
  },
} satisfies Story;

export default meta;
