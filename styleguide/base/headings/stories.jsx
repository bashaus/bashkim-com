import React from 'react';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Style Guide: Base/Headings', module);

stories
  .add('default', () => (
    <h3>Heading 3</h3>
  ));
