import React from 'react';
import { withKnobs, files, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import Tile from '.';

const stories = storiesOf('Components: Tile', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  (): JSX.Element => {
    const icon = files('icon', '', []);
    const poster = files('poster', '', []);
    return (
      <div style={{ maxWidth: '200px' }}>
        <Tile
          description={text('description', 'description')}
          icon={icon[0]}
          poster={poster[0]}
          title={text('title', 'title')}
        />
      </div>
    );
  },
);
