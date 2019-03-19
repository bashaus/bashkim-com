import React from 'react';
import { storiesOf } from '@storybook/react';

import JSONDecorator from '%storybook/decorators/json';

import SubtitleSliceType from './component.jsx';
import fixture from './fixture.json';
import schema from './schema.json';

storiesOf('Prismic Slice Types: Subtitle', module)
  .add('example', () => (
    <SubtitleSliceType slice={fixture} />
  ))

  .add('schema', () => (
    <JSONDecorator schema={schema} />
  ));
