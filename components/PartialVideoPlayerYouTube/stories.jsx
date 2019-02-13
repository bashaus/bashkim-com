import React from 'react';

import { storiesOf } from '@storybook/react';

import PartialVideoPlayerYouTube from '.';

storiesOf('Components: PartialVideoPlayerYouTube', module)
  .add('default', () => (
    <div style={{ maxWidth: '800px' }}>
      <PartialVideoPlayerYouTube v="a-q_dnOErQY" />
    </div>
  ));
