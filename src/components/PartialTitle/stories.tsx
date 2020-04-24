import React from 'react';
import { withKnobs, files, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import PartialTitle from '.';

const stories = storiesOf('Partials: Title', module);
stories.addDecorator(withKnobs);

stories
  .add(
    'default',
    (): JSX.Element => {
      const image = files('image', '', []);

      return (
        <PartialTitle image={image[0]}>
          <h1>{text('Title', 'Hello World')}</h1>
          <p>{text('Description', 'Lorem ipsum dolar sit a met.')}</p>
        </PartialTitle>
      );
    },
  );
