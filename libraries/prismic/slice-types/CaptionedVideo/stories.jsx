import React from 'react';
import { storiesOf } from '@storybook/react';

import JSONDecorator from '%storybook/decorators/json';

import CaptionedVideoSliceType from './component.jsx';
import fixture from './fixture.json';
import schema from './schema.json';

storiesOf('Prismic Slice Types: CaptionedVideo', module)
  .add('example', () => (
    <CaptionedVideoSliceType slice={fixture} />
  ))

  .add('schema', () => (
    <JSONDecorator schema={schema} />
  ));
