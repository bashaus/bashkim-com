import React from 'react';

import { storiesOf } from '@storybook/react';

import Magazine from '.';

const stories = storiesOf('Components: Magazine', module);

stories
  .add('default', () => (
    <div style={{ width: 700 }}>
      <Magazine pageWidth={300} pageHeight={450}>
        <li><img src="https://placehold.it/300x450" /></li>
        <li><img src="https://placehold.it/300x450" /></li>
        <li><img src="https://placehold.it/300x450" /></li>
        <li><img src="https://placehold.it/300x450" /></li>
      </Magazine>
    </div>
  ));
