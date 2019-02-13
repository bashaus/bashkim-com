import React from 'react';

import { storiesOf } from '@storybook/react';

import PartialSubtitle from '.';

storiesOf('Components: PartialSubtitle', module)
  .add('default', () => (
    <PartialSubtitle>
      <h2>This is a subtitle</h2>
    </PartialSubtitle>
  ));
