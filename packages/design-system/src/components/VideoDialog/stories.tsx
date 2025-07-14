import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

import VideoDialog from ".";

const meta = {
  component: VideoDialog,
  title: "Components/Video Dialog",
  args: {
    open: true,
    onClose: fn(),
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VideoDialog>;

type Story = StoryObj<typeof meta>;

export const YouTube = {
  args: {
    url: "https://youtu.be/aqz-KE-bpKQ",
  },
} satisfies Story;

export default meta;
