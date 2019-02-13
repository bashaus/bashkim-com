import React from 'react';

import { storiesOf } from '@storybook/react';

import PartialHeaderImage from '.';

storiesOf('Components: PartialHeaderImage', module)
  .add('default', () => (
    <PartialHeaderImage
      id="PartialHeaderImage"
    />
  ));
