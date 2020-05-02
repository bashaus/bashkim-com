import React from 'react';
import JSONDecorator from '%storybook/decorators/json';

import FullTextSliceType from './component';
import FullTextSlicePropType from './type';

import fixture from './fixture.json';
import schema from './schema.json';

export default {
  title: 'Prismic/Slice Types/Full Text',
};

export const Render = (): JSX.Element => (
  <FullTextSliceType slice={fixture as FullTextSlicePropType} />
);

export const Schema = (): JSX.Element => (
  <JSONDecorator schema={schema} />
);
