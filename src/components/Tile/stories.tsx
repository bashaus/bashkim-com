import React from 'react';
import { withKnobs, files, text } from '@storybook/addon-knobs';

import Tile from '.';

export default {
  title: 'Components/Tile',
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <div style={{ maxWidth: '200px' }}>
    <Tile
      description={text('description', 'description')}
      icon={files('icon', '', [])[0]}
      poster={files('poster', '', [])[0]}
      title={text('title', 'title')}
    />
  </div>
);
