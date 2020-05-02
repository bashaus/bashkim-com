import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import PartialNewspaper from '.';

export default {
  title: 'Partials/Newspaper',
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialNewspaper>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
  </PartialNewspaper>
);
