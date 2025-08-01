import type { Meta, StoryObj } from "@storybook/nextjs";

import VideoLoading from ".";

const meta = {
  component: VideoLoading,
  title: "Components/Video Loading",
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof VideoLoading>;

type Story = StoryObj<typeof meta>;

export const Example = {} satisfies Story;

export default meta;
