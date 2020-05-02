import React from 'react';
import { withKnobs, files, text } from '@storybook/addon-knobs';

import DeviceFeaturePhone from '.';

export default {
  title: 'Components/DeviceFeaturePhone',
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <DeviceFeaturePhone
    figure={
      <img src={files('figure', '', ['https://placehold.it/248x195'])[0]} alt="" />
    }
  >
    <p>{text('caption', 'caption')}</p>
  </DeviceFeaturePhone>
);
