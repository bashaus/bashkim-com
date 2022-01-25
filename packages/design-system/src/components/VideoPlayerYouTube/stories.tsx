import { Meta, Story } from "@storybook/react";

import { VideoPlayerYouTube, VideoPlayerYouTubeProps } from ".";

export default {
  component: VideoPlayerYouTube,
  title: "Components/VideoPlayerYouTube",
  args: {
    v: "aqz-KE-bpKQ",
    title: "Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film",
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<VideoPlayerYouTubeProps> = (
  args: VideoPlayerYouTubeProps
) => (
  <div style={{ maxWidth: 600, width: "100vw" }}>
    <VideoPlayerYouTube {...args} />
  </div>
);

export const Render = Template.bind({});
