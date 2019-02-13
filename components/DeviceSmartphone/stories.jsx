import React from 'react';

import { storiesOf } from '@storybook/react';

import DeviceSmartphone from '.';

storiesOf('Components: DeviceSmartphone', module)
  .add('default', () => (
    <DeviceSmartphone>
      This is a description of the content.
    </DeviceSmartphone>
  ));
