import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import PartialFullText from '.';

export default {
  title: 'Partials/Full Text',
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialFullText>
    <p>{text('copy', 'copy')}</p>
  </PartialFullText>
);
