import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import PartialFullText from '.';

const stories = storiesOf('Partials: Full Text', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  (): JSX.Element => (
    <PartialFullText>
      <p>{text('copy', 'copy')}</p>
    </PartialFullText>
  ),
);
