import React from 'react';

import { storiesOf } from '@storybook/react';

import PartialHeaderText from '.';

storiesOf('Components: PartialHeaderText', module)
  .add('default', () => (
    <PartialHeaderText>
      <h2>Header text</h2>
      <p>
        This is header text
      </p>
    </PartialHeaderText>
  ));
