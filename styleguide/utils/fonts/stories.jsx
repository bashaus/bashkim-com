import React from 'react';

import { storiesOf } from '@storybook/react';

import styles from './_stories.scss'

storiesOf('Style Guide: Utils/Fonts', module)
  .add('default', () => (
    <React.Fragment>
      <div className={styles.copy}>
        $font-family-copy
      </div>

      <div className={styles.monospace}>
        $font-family-monospace
      </div>
    </React.Fragment>
  ));
