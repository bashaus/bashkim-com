import React from 'react';

import { storiesOf } from '@storybook/react';

import VideoPlayerYouTube from '.';

const stories = storiesOf('Components: VideoPlayerYouTube', module);

stories.add(
  'default',
  (): JSX.Element => (
    <div style={{ maxWidth: '800px' }}>
      <VideoPlayerYouTube
        v="a-q_dnOErQY"
        title="Looking For You - Making-of Video"
      />
    </div>
  ),
);
