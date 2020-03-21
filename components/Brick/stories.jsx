import React from 'react';
import { withKnobs, files, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import Brick from '.';

const stories = storiesOf('Components: Brick', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => {
    const icon = files('Icon', '', []);

    return (
      <Brick
        title={text('Title', 'Brick title')}
        description={text('Description', 'Brick description')}
        icon={icon[0]}
      />
    );
  });
