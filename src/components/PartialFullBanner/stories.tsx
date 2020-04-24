import React from 'react';
import { withKnobs, files, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import PartialFullBanner from '.';

const stories = storiesOf('Partials: Full Banner', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  (): JSX.Element => {
    const backgroundDesktop = files('backgroundDesktop', '', []);
    const backgroundMobile = files('backgroundMobile', '', []);

    return (
      <PartialFullBanner
        backgroundDesktop={backgroundDesktop[0]}
        backgroundMobile={backgroundMobile[0]}
        id="PartialFullBanner"
      >
        <h2>{text('heading', 'heading')}</h2>
        <p>{text('copy', 'copy')}</p>
      </PartialFullBanner>
    );
  },
);
