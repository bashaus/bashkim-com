import React from 'react';

import { storiesOf } from '@storybook/react';

import Header from '.';
import NavigationProvider from '%contexts/Navigation';

storiesOf('Components: Header', module)
  .add('default', () => (
    <NavigationProvider>
      <Header />
    </NavigationProvider>
  ));
