import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CookiesProvider from '%contexts/Cookies'
import CookiesNotice from '.';

storiesOf('Components: CookiesNotice', module)
  .add('default', () => (
    <CookiesProvider>
      <CookiesNotice doCookiesDismiss={action('doCookiesDismiss')} />
    </CookiesProvider>
  ));
