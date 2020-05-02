import React from 'react';

import NavigationStore from '%contexts/Navigation';
import MenuSignifierButton from '.';

export default {
  title: 'Components/MenuSignifierButton',
};

export const Render = (): JSX.Element => (
  <NavigationStore>
    <MenuSignifierButton />
  </NavigationStore>
);
