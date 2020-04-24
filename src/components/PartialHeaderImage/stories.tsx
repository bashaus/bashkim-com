import React from 'react';
import { withKnobs, files } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import PartialHeaderImage from '.';

const stories = storiesOf('Partials: HeaderImage', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  (): JSX.Element => {
    const imageDesktop = files('imageDesktop', '', []);
    const imageMobile = files('imageMobile', '', []);

    return (
      <PartialHeaderImage
        id="PartialHeaderImage"
        imageDesktop={imageDesktop[0]}
        imageMobile={imageMobile[0]}
      />
    );
  },
);
