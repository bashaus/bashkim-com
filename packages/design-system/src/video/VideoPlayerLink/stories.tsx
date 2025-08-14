import Link from "@mui/material/Link";
import type { Meta, StoryObj } from "@storybook/nextjs";

import VideoPlayerLink from ".";

const meta = {
  component: VideoPlayerLink,
  title: "Video/Video Player Link",
  args: {
    videoUrl: "https://youtu.be/aqz-KE-bpKQ",
    children: <Link>Video player link</Link>,
  },
  argTypes: {
    children: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VideoPlayerLink>;

type Story = StoryObj<typeof meta>;

export const Fixture = {} satisfies Story;

export const OnClick = {
  play: async ({ canvas, userEvent }) => {
    const user = userEvent.setup({ delay: 300 });
    await user.click(canvas.getByText(/Link/i));
  },
} satisfies Story;

export default meta;
