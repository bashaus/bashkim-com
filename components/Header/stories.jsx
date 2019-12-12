import React from 'react';

import { storiesOf } from '@storybook/react';

import Header from '.';
import NavigationStore from '%contexts/Navigation';

storiesOf('Components: Header', module)
  .add('default', () => (
    <NavigationStore>
      <Header />
    </NavigationStore>
  ));
