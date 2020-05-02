import React from 'react';
import { withKnobs, files } from '@storybook/addon-knobs';

import PartialFullImage from '.';

export default {
  title: 'Partials/Full Image',
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialFullImage>
    <img src={files('figure', '', [])[0]} alt="" />
  </PartialFullImage>
);
