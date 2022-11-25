import type { Meta, Story } from "@storybook/react";

import {
  VideoPlayer as VideoPlayerComponent,
  VideoPlayerProps,
} from "./VideoPlayer";

export default {
  component: VideoPlayerComponent,
  title: "Components/Video Player",
  args: {
    url: "https://youtu.be/aqz-KE-bpKQ",
  },
  parameters: {
    layout: "padded",
  },
} as Meta;

const Template: Story<VideoPlayerProps> = (args: VideoPlayerProps) => (
  <VideoPlayerComponent {...args} />
);

export const VideoPlayer = Template.bind({});
