import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

import VideoCloseButton from ".";

const meta = {
  component: VideoCloseButton,
  title: "Video/Video Close Button",
  args: {
    onClick: fn(),
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VideoCloseButton>;

type Story = StoryObj<typeof meta>;

export const Example = {} satisfies Story;

export default meta;
