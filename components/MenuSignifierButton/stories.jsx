import React from 'react';

import { storiesOf } from '@storybook/react';

import { MenuSignifierButtonDisconnected } from '.';

storiesOf('Components: MenuSignifierButton', module)
  .add('unpressed', () => (
    <MenuSignifierButtonDisconnected menuIsVisible={false} />
  ))

  .add('pressed', () => (
    <MenuSignifierButtonDisconnected menuIsVisible />
  ));
