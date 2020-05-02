import React from 'react';
import { withKnobs, files, text } from '@storybook/addon-knobs';

import PartialFullBanner from '.';

export default {
  title: 'Partials/Full Banner',
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialFullBanner
    backgroundDesktop={files('backgroundDesktop', '', [])[0]}
    backgroundMobile={files('backgroundMobile', '', [])[0]}
    id="PartialFullBanner"
  >
    <h2>{text('heading', 'heading')}</h2>
    <p>{text('copy', 'copy')}</p>
  </PartialFullBanner>
);
