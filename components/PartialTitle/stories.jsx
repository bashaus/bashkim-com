import React from 'react';

import { storiesOf } from '@storybook/react';

import PartialTitle from '.';

storiesOf('Components: PartialTitle', module)
  .add('title only', () => (
    <PartialTitle title="This is a title" />
  ))

  .add('description only', () => (
    <PartialTitle>
      <p>
        This is a description
      </p>
    </PartialTitle>
  ))

  .add('title and description', () => (
    <PartialTitle title="This is a title">
      <p>
        This is a description
      </p>
    </PartialTitle>
  ));
