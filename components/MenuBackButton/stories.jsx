import React from 'react';

import { storiesOf } from '@storybook/react';

import MenuBackButtonHomeImpl from '%components/MenuBackButtonHomeImpl';
import MenuBackButtonPortfolioImpl from '%components/MenuBackButtonPortfolioImpl';

storiesOf('Components: MenuBackButton', module)
  .add('home', () => MenuBackButtonHomeImpl)
  .add('portfolio', () => MenuBackButtonPortfolioImpl);
