import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';

import Menu from '.';
import MenuBackButtonHomeImpl from '%components/MenuBackButtonHomeImpl';
import MenuBackButtonPortfolioImpl from '%components/MenuBackButtonPortfolioImpl';
import Store from '%store';

const store = Store();

storiesOf('Components: Menu', module)
  .add('default', () => (
    <Provider store={store}>
      <Menu />
    </Provider>
  ))

  .add('back to home', () => (
    <Provider store={store}>
      <Menu backButton={MenuBackButtonHomeImpl} />
    </Provider>
  ))

  .add('back to portfolio', () => (
    <Provider store={store}>
      <Menu backButton={MenuBackButtonPortfolioImpl} />
    </Provider>
  ));

