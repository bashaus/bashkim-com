import React from 'react';

import { storiesOf } from '@storybook/react';

import NavigationStore from '%contexts/Navigation';
import MenuSignifierButton from '.';

const stories = storiesOf('Components: MenuSignifierButton', module);

stories.add(
  'default',
  (): JSX.Element => (
    <NavigationStore>
      <MenuSignifierButton />
    </NavigationStore>
  ),
);
