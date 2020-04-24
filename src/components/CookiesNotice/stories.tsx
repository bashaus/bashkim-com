import React from 'react';

import { storiesOf } from '@storybook/react';

import CookiesProvider from '%contexts/Cookies';
import CookiesNotice from '.';

const stories = storiesOf('Components: CookiesNotice', module);

stories.add(
  'default',
  (): JSX.Element => (
    <CookiesProvider>
      <CookiesNotice />
    </CookiesProvider>
  ),
);
