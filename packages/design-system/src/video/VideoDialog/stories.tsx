import type { Meta, StoryObj } from "@storybook/nextjs";
import { MediaProvider } from "media-chrome/dist/react/media-store.js";
import { fn } from "storybook/test";

import VideoDialog from ".";

const meta = {
  component: VideoDialog,
  title: "Video/Video Dialog",
  args: {
    open: true,
    onClose: fn(),
  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MediaProvider>
        <Story />
      </MediaProvider>
    ),
  ],
} satisfies Meta<typeof VideoDialog>;

type Story = StoryObj<typeof meta>;

export const YouTube = {
  args: {
    url: "https://vimeo.com/1084537",
  },
} satisfies Story;

export default meta;
