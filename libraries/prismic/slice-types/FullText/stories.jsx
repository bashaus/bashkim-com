import React from 'react';
import { storiesOf } from '@storybook/react';

import JSONDecorator from '%storybook/decorators/json';

import FullTextSliceType from './component.jsx';
import fixture from './fixture.json';
import schema from './schema.json';

storiesOf('Prismic Slice Types: FullText', module)
  .add('example', () => (
    <FullTextSliceType slice={fixture} />
  ))

  .add('schema', () => (
    <JSONDecorator schema={schema} />
  ));
