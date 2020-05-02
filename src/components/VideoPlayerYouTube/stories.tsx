import React from 'react';

import VideoPlayerYouTube from '.';

export default {
  title: 'Components/Video Player YouTube',
};

export const Render = (): JSX.Element => (
  <div style={{ maxWidth: '800px' }}>
    <VideoPlayerYouTube
      v="a-q_dnOErQY"
      title="Looking For You - Making-of Video"
    />
  </div>
);
