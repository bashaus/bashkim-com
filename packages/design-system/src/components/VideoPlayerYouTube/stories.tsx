import { VideoPlayerYouTube, VideoPlayerYouTubeProps } from ".";

export default {
  component: VideoPlayerYouTube,
  title: "Video Player/YouTube",
  parameters: {
    layout: "centered",
  },
};

const Template = ({ ...args }: VideoPlayerYouTubeProps) => (
  <div style={{ maxWidth: 600, width: "100vw" }}>
    <VideoPlayerYouTube {...args} />
  </div>
);

export const YouTube = Template.bind({});
YouTube.args = {
  v: "aqz-KE-bpKQ",
  title: "Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film",
};
