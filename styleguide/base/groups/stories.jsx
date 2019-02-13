import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('Style Guide: Base/Groups', module)
  .add('default', () => (
    <section className="group">
      This is a standard group style.
    </section>
  ))
  .add('alternate', () => (
    <section className="group-alternate">
      This is an alternate group style.
    </section>
  ));
