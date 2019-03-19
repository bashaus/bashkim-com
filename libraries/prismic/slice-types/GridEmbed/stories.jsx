import React from 'react';
import { storiesOf } from '@storybook/react';

import JSONDecorator from '%storybook/decorators/json';

import GridEmbedSliceType from './component.jsx';
import fixture from './fixture.json';
import schema from './schema.json';

storiesOf('Prismic Slice Types: GridEmbed', module)
  .add('example', () => (
    <GridEmbedSliceType slice={fixture} />
  ))

  .add('schema', () => (
    <JSONDecorator schema={schema} />
  ));
