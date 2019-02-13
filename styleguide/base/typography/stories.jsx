import React from 'react';

import { storiesOf } from '@storybook/react';

const FONT_FAMILIES = ['Proxima Nova'];
const FONT_WEIGHTS = ['normal', 'bold'];
const FONT_SIZES = [32, 28, 24, 18, 16, 14, 12, 10];

FONT_FAMILIES.map((fontFamily) => {
  FONT_WEIGHTS.map((fontWeight) => {
    storiesOf('Style Guide: Base/Typography', module)
      .add(`${fontFamily} (${fontWeight})`, () => (
        FONT_SIZES.map(size => (
          <div
            key={size}
            style={{
              fontWeight,
              fontFamily: `"${fontFamily}"`,
              fontSize: `${size}px`,
              lineHeight: '150%'
            }}
          >
            {`${fontFamily} (${fontWeight}) ${size}px`}
          </div>
        ))
      ));
  
  })
});
