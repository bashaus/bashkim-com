import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import PartialSubtitle from '.';

const stories = storiesOf('Partials: Subtitle', module);
stories.addDecorator(withKnobs);

stories
  .add('dynamic', () => (
    <PartialSubtitle>
      <h2>{ text('<h2>', 'This is a heading')}</h2>
      <p>{ text('<p>', 'This is a paragraph')}</p>
    </PartialSubtitle>
  ))

storiesOf('Partials: Subtitle', module)
  .add('default', () => (
    <PartialSubtitle>
      <h2>This is a subtitle</h2>
    </PartialSubtitle>
  ));
