import React from 'react';

import { storiesOf } from '@storybook/react';

import DeviceSmartphone from '.';

const stories = storiesOf('Components: DeviceSmartphone', module);

stories
  .add('default', () => (
    <DeviceSmartphone>
      This is a description of the content.
    </DeviceSmartphone>
  ));
