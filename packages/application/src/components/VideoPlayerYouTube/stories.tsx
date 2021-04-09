import { withKnobs, text } from "@storybook/addon-knobs";

import ComponentDecorator from "%storybook/decorators/component";

import VideoPlayerYouTube from ".";

export default {
  title: "Components/Video Player YouTube",
  decorators: [withKnobs, ComponentDecorator],
};

export const Render = (): JSX.Element => (
  <div
    style={{
      width: "100%",
      maxWidth: 600,
    }}
  >
    <VideoPlayerYouTube
      v={text("v", "a-q_dnOErQY")}
      title={text("title", "Looking For You - Making-of Video")}
    />
  </div>
);
