import React from 'react';
import JSONDecorator from '%storybook/decorators/json';

import CaptionedImageSliceType from './component';
import CaptionedImageSlicePropType from './type';

import fixture from './fixture.json';
import schema from './schema.json';

export default {
  title: 'Prismic/Slice Types/Captioned Image',
};

export const Render = (): JSX.Element => (
  <CaptionedImageSliceType slice={fixture as CaptionedImageSlicePropType} />
);

export const Schema = (): JSX.Element => (
  <JSONDecorator schema={schema} />
);
