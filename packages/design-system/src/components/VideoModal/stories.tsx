import type { Meta, Story } from "@storybook/react";

import { VideoModal as VideoModalComponent, VideoModalProps } from ".";

export default {
  component: VideoModalComponent,
  title: "Components/Video Modal",
  args: {
    isOpen: true,
    url: "https://youtu.be/aqz-KE-bpKQ",
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<VideoModalProps> = (args: VideoModalProps) => (
  <VideoModalComponent {...args} />
);

export const VideoModal = Template.bind({});
