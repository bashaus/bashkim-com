import type { Meta, StoryObj } from "@storybook/nextjs";
import { MediaProvider } from "media-chrome/dist/react/media-store.js";

import VideoPlayer from ".";

const meta = {
  component: VideoPlayer,
  title: "Video/Video Player",
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <MediaProvider>
        <Story />
      </MediaProvider>
    ),
  ],
} satisfies Meta<typeof VideoPlayer>;

type Story = StoryObj<typeof meta>;

export const YouTube = {
  args: {
    url: "https://vimeo.com/1084537",
  },
} satisfies Story;

export default meta;
