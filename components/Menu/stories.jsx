import React from 'react';
import { storiesOf } from '@storybook/react';

import Menu from '.';
import MenuBackButtonHomeImpl from '%components/MenuBackButtonHomeImpl';
import MenuBackButtonPortfolioImpl from '%components/MenuBackButtonPortfolioImpl';
import NavigationProvider from '%contexts/Navigation';

storiesOf('Components: Menu', module)
  .add('default', () => (
    <NavigationProvider>
      <Menu />
    </NavigationProvider>
  ))

  .add('back to home', () => (
    <NavigationProvider>
      <Menu backButton={MenuBackButtonHomeImpl} />
    </NavigationProvider>
  ))

  .add('back to portfolio', () => (
    <NavigationProvider>
      <Menu backButton={MenuBackButtonPortfolioImpl} />
    </NavigationProvider>
  ));

