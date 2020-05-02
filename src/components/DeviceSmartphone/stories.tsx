import React from 'react';
import { withKnobs, files, text } from '@storybook/addon-knobs';

import DeviceSmartphone from '.';

export default {
  title: 'Components/DeviceSmartphone',
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <DeviceSmartphone
    figure={
      <img src={files('figure', '', ['https://placehold.it/320x565'])[0]} alt="" />
    }
  >
    <p>{text('caption', 'caption')}</p>
  </DeviceSmartphone>
);
