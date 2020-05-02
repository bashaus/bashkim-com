import React from 'react';

import Carousel from '.';

export default {
  title: 'Components/Carousel',
};

export const Render = (): JSX.Element => (
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
);
