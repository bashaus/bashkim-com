import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PortfolioFilter from '.';

storiesOf('Components: PortfolioFilter', module)
  .add('default', () => (
    <PortfolioFilter onChange={action('onChange')} />
  ));
