import React from 'react';
import JSONDecorator from '%storybook/decorators/json';

import CaptionedVideoSliceType from './component';
import CaptionedVideoSlicePropType from './type';

import fixture from './fixture.json';
import schema from './schema.json';

export default {
  title: 'Prismic/Slice Types/Captioned Video',
};

export const Render = (): JSX.Element => (
  <CaptionedVideoSliceType slice={fixture as CaptionedVideoSlicePropType} />
);

export const Schema = (): JSX.Element => (
  <JSONDecorator schema={schema} />
);
