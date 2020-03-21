import React from 'react';
import { storiesOf } from '@storybook/react';

import Menu from '.';
import MenuBackButtonHomeImpl from '%components/MenuBackButtonHomeImpl';
import MenuBackButtonPortfolioImpl from '%components/MenuBackButtonPortfolioImpl';
import NavigationStore from '%contexts/Navigation';

const stories = storiesOf('Components: Menu', module);

stories
  .add('default', () => (
    <NavigationStore>
      <Menu />
    </NavigationStore>
  ))

  .add('back to home', () => (
    <NavigationStore>
      <Menu backButton={MenuBackButtonHomeImpl} />
    </NavigationStore>
  ))

  .add('back to portfolio', () => (
    <NavigationStore>
      <Menu backButton={MenuBackButtonPortfolioImpl} />
    </NavigationStore>
  ));

