import React from 'react';
import JSONDecorator from '%storybook/decorators/json';

import AccoladeSliceType from './component';
import AccoladeSlicePropType from './type';

import fixture from './fixture.json';
import schema from './schema.json';

export default {
  title: 'Prismic/Slice Types/Accolade',
};

export const Render = (): JSX.Element => (
  <AccoladeSliceType slice={fixture as AccoladeSlicePropType} />
);

export const Schema = (): JSX.Element => (
  <JSONDecorator schema={schema} />
);
