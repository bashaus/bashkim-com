import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CookiesNoticeDisconnected as CookiesNotice } from '.';

storiesOf('Components: CookiesNotice', module)
  .add('default', () => (
    <CookiesNotice doCookiesDismiss={action('doCookiesDismiss')} />
  ));
