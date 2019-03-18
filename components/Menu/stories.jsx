import React from 'react';

import { storiesOf } from '@storybook/react';

import Menu from '.';
import MenuBackButtonHomeImpl from '%components/MenuBackButtonHomeImpl';

storiesOf('Components: Menu', module)
  .add('default', () => (
    <Menu />
  ))

  .add('with back button', () => (
    <Menu backButton={MenuBackButtonHomeImpl} />
  ));
