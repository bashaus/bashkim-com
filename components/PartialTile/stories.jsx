import React from 'react';

import { storiesOf } from '@storybook/react';

import PartialTile from '.';

storiesOf('Components: PartialTile', module)
  .add('default', () => (
    <div style={{ maxWidth: '200px' }}>
      <PartialTile
        description="This is a description"
        href="#"
        icon={null}
        poster={null}
        title="This is a title"
      />
    </div>
  ));
