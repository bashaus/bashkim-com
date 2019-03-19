import React from 'react';
import { withKnobs, files, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import Brick from '.';

const stories = storiesOf('Components: Brick', module)
stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <Brick
      title="Brick title"
      description="Brick description"
      icon={null}
      href="#"
    />
  ))

  .add('dynamic', () => {
    const icon = files('Icon', '', []);

    return (
      <Brick
        title={text('Title', 'Brick title')}
        description={text('Description', 'Brick description')}
        href="#"
        icon={icon[0]}
      />
    );
  });
