import React from 'react';
import { storiesOf } from '@storybook/react';
import JSONDecorator from '%storybook/decorators/json';

import schema from './schema';

storiesOf('Prismic Content Types: Case Study', module)
  .add('schema', () => <JSONDecorator schema={schema} />);
