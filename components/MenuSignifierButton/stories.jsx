import React from 'react';

import { storiesOf } from '@storybook/react';

import MenuSignifierButton from '.';

storiesOf('Components: MenuSignifierButton', module)
  .add('unpressed', () => (
    <MenuSignifierButton pressed={false} />
  ))

  .add('pressed', () => (
    <MenuSignifierButton pressed />
  ));
