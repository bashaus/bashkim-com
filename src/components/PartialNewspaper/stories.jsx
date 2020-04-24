import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import PartialNewspaper from '.';

const stories = storiesOf('Partials: Newspaper', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  (): JSX.Element => {
    return (
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
  },
);
