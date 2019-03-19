import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import PartialHeaderText from '.';

const stories = storiesOf('Partials: HeaderText', module)
stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <PartialHeaderText>
      <h1>Header text</h1>
      <p>
        This is header text
      </p>
    </PartialHeaderText>
  ))

  .add('dynamic', () => (
    <PartialHeaderText>
      <h1>{text('<h1>', 'Hello World')}</h1>
      <p>{text('<p>', 'Lorem ipsum dolar sit a met')}</p>
    </PartialHeaderText>
  ));

