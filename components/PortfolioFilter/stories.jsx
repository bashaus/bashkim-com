import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PortfolioFilter from '.';

storiesOf('Page, Portfolio: Filter', module)
  .add('default', () => (
    <PortfolioFilter onChange={action('onChange')} />
  ));
