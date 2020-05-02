import React from 'react';

import Header from '.';
import NavigationStore from '%contexts/Navigation';

export default {
  title: 'Components/Header',
};

export const Render = (): JSX.Element => (
  <NavigationStore>
    <Header theme="default" />
  </NavigationStore>
);
