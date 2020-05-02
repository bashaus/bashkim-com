import React from 'react';
import { withKnobs, files, text } from '@storybook/addon-knobs';

import PartialCaptioned from '.';

export default {
  title: 'Partials/Captioned',
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialCaptioned figure={files('figure', '', [])[0]}>
    <h3>{text('heading', 'heading')}</h3>
    <p>{text('text', 'text')}</p>
  </PartialCaptioned>
);
