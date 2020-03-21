import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PortfolioFilter from '.';

const stories = storiesOf('Page, Portfolio: Filter', module);

stories
  .add('default', () => (
    <PortfolioFilter onChange={action('onChange')} />
  ));
