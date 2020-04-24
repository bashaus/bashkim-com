import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import PartialSubtitle from '.';

const stories = storiesOf('Partials: Subtitle', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  (): JSX.Element => (
    <PartialSubtitle>
      <h2>{text('<h2>', 'This is a heading')}</h2>
      <p>{text('<p>', 'This is a paragraph')}</p>
    </PartialSubtitle>
  ),
);
