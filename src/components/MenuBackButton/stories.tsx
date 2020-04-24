import { storiesOf } from '@storybook/react';

import MenuBackButtonHomeImpl from '%components/MenuBackButtonHomeImpl';
import MenuBackButtonPortfolioImpl from '%components/MenuBackButtonPortfolioImpl';

const stories = storiesOf('Components: MenuBackButton', module);

stories
  .add('home', () => MenuBackButtonHomeImpl)
  .add('portfolio', () => MenuBackButtonPortfolioImpl);
