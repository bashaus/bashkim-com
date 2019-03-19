import React from 'react';
import { storiesOf } from '@storybook/react';

import JSONDecorator from '%storybook/decorators/json';

import CaptionedScreenshotsSliceType from './component.jsx';
import fixture from './fixture.json';
import schema from './schema.json';

storiesOf('Prismic Slice Types: CaptionedScreenshots', module)
  .add('example', () => (
    <CaptionedScreenshotsSliceType slice={fixture} />
  ))

  .add('schema', () => (
    <JSONDecorator schema={schema} />
  ));
