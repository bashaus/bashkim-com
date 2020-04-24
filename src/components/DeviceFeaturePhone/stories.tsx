import React from 'react';

import { storiesOf } from '@storybook/react';

import DeviceFeaturePhone from '.';

const stories = storiesOf('Components: DeviceFeaturePhone', module);

stories.add(
  'default',
  (): JSX.Element => (
    <DeviceFeaturePhone figure={null}>
      <p>This is a description of the content.</p>
    </DeviceFeaturePhone>
  ),
);
