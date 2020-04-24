import React from 'react';

import { storiesOf } from '@storybook/react';

import Magazine from '.';

const stories = storiesOf('Components: Magazine', module);

stories.add(
  'default',
  (): JSX.Element => (
    <div style={{ width: 700 }}>
      <Magazine pageWidth={300} pageHeight={450}>
        <li>
          <img src="https://placehold.it/300x450" alt="Page 1" />
        </li>
        <li>
          <img src="https://placehold.it/300x450" alt="Page 2" />
        </li>
        <li>
          <img src="https://placehold.it/300x450" alt="Page 3" />
        </li>
        <li>
          <img src="https://placehold.it/300x450" alt="Page 4" />
        </li>
      </Magazine>
    </div>
  ),
);
