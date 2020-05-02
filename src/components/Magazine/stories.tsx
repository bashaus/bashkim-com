import React from 'react';

import Magazine from '.';

export default {
  title: 'Components/Magazine',
};

export const Render = (): JSX.Element => (
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
);
