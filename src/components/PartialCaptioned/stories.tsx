import React from 'react';
import { withKnobs, files, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import PartialCaptioned from '.';

const stories = storiesOf('Partials: Captioned', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  (): JSX.Element => {
    const figure = files('figure', '', []);

    return (
      <PartialCaptioned figure={figure[0]}>
        <h3>{text('heading', 'heading')}</h3>
        <p>{text('text', 'text')}</p>
      </PartialCaptioned>
    );
  },
);
