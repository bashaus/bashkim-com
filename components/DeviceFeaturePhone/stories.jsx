import React from 'react';

import { storiesOf } from '@storybook/react';

import DeviceFeaturePhone from '.';

const stories = storiesOf('Components: DeviceFeaturePhone', module);

stories
  .add('default', () => (
    <DeviceFeaturePhone>
      This is a description of the content.
    </DeviceFeaturePhone>
  ));
