import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import PartialTitle from '.';

const stories = storiesOf('Partials: Title', module);
stories.addDecorator(withKnobs);

stories
  .add('dynamic', () => (
    <PartialTitle title={text('Title', 'Hello World')}>
      { text('Description', 'Lorem ipsum dolar sit a met.')}
    </PartialTitle>
  ))

  .add('title only', () => (
    <PartialTitle title="This is a title" />
  ))

  .add('description only', () => (
    <PartialTitle>
      <p>
        This is a description
      </p>
    </PartialTitle>
  ))

  .add('title and description', () => (
    <PartialTitle title="This is a title">
      <p>
        This is a description
      </p>
    </PartialTitle>
  ));
