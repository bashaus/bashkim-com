import React from 'react';

import { storiesOf } from '@storybook/react';

import Footer from '.';

const stories = storiesOf('Components: Footer', module);

stories
  .add('default', () => (
    <Footer />
  ));
