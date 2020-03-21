import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import PartialTitle from '.';

const stories = storiesOf('Partials: Title', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <PartialTitle title={text('Title', 'Hello World')}>
      <p>{ text('Description', 'Lorem ipsum dolar sit a met.')}</p>
    </PartialTitle>
  ))

  .add('title only', () => (
    <PartialTitle title={text('Title', 'Hello World')} />
  ))

  .add('description only', () => (
    <PartialTitle>
      <p>{ text('Description', 'Lorem ipsum dolar sit a met.')}</p>
    </PartialTitle>
  ));
