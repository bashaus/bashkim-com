import React from 'react';
import { storiesOf } from '@storybook/react';

import JSONDecorator from '%storybook/decorators/json';

import CarouselImagesSliceType from './component.jsx';
import fixture from './fixture.json';
import schema from './schema.json';

const stories = storiesOf('Prismic Slice Types: CarouselImages', module);

stories
  .add('example', () => (
    <CarouselImagesSliceType slice={fixture} />
  ))

  .add('schema', () => (
    <JSONDecorator schema={schema} />
  ));
