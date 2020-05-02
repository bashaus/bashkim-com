import React from 'react';
import { withKnobs, files } from '@storybook/addon-knobs';

import PartialHeaderImage from '.';

export default {
  title: 'Partials/Header Image',
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialHeaderImage
    id="PartialHeaderImage"
    imageDesktop={files('imageDesktop', '', [])[0]}
    imageMobile={files('imageMobile', '', [])[0]}
  />
);
