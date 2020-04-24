import React from 'react';
import { withKnobs, files, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import PartialFullImage from '.';

const stories = storiesOf('Partials: Full Image', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  (): JSX.Element => {
    const figure = files('figure', '', []);

    return (
      <PartialFullImage figure={figure[0]}>
        <h3>{text('heading', 'heading')}</h3>
        <p>{text('copy', 'copy')}</p>
      </PartialFullImage>
    );
  },
);
