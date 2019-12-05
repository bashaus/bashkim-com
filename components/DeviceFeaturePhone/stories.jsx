import React from 'react';

import { storiesOf } from '@storybook/react';

import DeviceFeaturePhone from '.';

storiesOf('Components: DeviceFeaturePhone', module)
  .add('default', () => (
    <DeviceFeaturePhone>
      This is a description of the content.
    </DeviceFeaturePhone>
  ));
