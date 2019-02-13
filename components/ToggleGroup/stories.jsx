import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ToggleButton from 'components/ToggleButton';
import ToggleGroup from '.';

storiesOf('Components: ToggleGroup', module)
  .add('default', () => (
    <ToggleGroup initialValue="one" onChange={action('onChange')}>
      <ToggleButton value="one">
        Button one
      </ToggleButton>
      <ToggleButton value="two">
        Button two
      </ToggleButton>
    </ToggleGroup>
  ));
