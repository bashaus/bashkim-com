import type { Meta, StoryObj } from "@storybook/nextjs";

import VideoPlayer from ".";

const meta = {
  component: VideoPlayer,
  title: "Components/Video Player",
  args: {},
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof VideoPlayer>;

type Story = StoryObj<typeof meta>;

export const YouTube = {
  args: {
    url: "https://youtu.be/aqz-KE-bpKQ",
  },
} satisfies Story;

export default meta;
