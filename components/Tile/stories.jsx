import React from 'react';

import { storiesOf } from '@storybook/react';

import Tile from '.';

const stories = storiesOf('Components: Tile', module);

stories
  .add('default', () => (
    <div style={{ maxWidth: '200px' }}>
      <Tile
        description="This is a description"
        icon={null}
        poster={null}
        title="This is a title"
      />
    </div>
  ));
