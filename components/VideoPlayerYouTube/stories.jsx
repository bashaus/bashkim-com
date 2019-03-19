import React from 'react';

import { storiesOf } from '@storybook/react';

import VideoPlayerYouTube from '.';

storiesOf('Components: VideoPlayerYouTube', module)
  .add('default', () => (
    <div style={{ maxWidth: '800px' }}>
      <VideoPlayerYouTube
        v="a-q_dnOErQY"
        title="Looking For You - Making-of Video"
      />
    </div>
  ));
