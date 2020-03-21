import React from 'react';

import { storiesOf } from '@storybook/react';

import Header from '.';
import NavigationStore from '%contexts/Navigation';

const stories = storiesOf('Components: Header', module);

stories
  .add('default', () => (
    <NavigationStore>
      <Header />
    </NavigationStore>
  ));
