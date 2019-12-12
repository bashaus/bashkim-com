import React from 'react';

import { storiesOf } from '@storybook/react';

import NavigationStore from '%contexts/Navigation';
import MenuSignifierButton from '.';

storiesOf('Components: MenuSignifierButton', module)
  .add('default', () => (
    <NavigationStore>
      <MenuSignifierButton />
    </NavigationStore>
  ))
