import React from 'react';

import { storiesOf } from '@storybook/react';

import Carousel from '.';

const stories = storiesOf('Components: Carousel', module);

stories.add(
  'default',
  (): JSX.Element => (
    <div style={{ maxWidth: 600, marginLeft: 30, marginRight: 30 }}>
      <Carousel>
        <div style={{ width: '100%', height: 400 }}>Slide 1</div>
        <div style={{ width: '100%', height: 400 }}>
          Slide 2
          <br />
          Two
        </div>
        <div style={{ width: '100%', height: 400 }}>Slide 3</div>
      </Carousel>
    </div>
  ),
);
