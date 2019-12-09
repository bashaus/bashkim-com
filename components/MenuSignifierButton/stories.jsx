import React from 'react';

import { storiesOf } from '@storybook/react';

import NavigationProvider from '%contexts/Navigation';
import MenuSignifierButton from '.';

storiesOf('Components: MenuSignifierButton', module)
  .add('default', () => (
    <NavigationProvider>
      <MenuSignifierButton />
    </NavigationProvider>
  ))
