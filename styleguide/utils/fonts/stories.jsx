import React from 'react';

import { storiesOf } from '@storybook/react';

import styles from './_stories.scss'

const stories = storiesOf('Style Guide: Utils/Fonts', module);

stories
  .add('default', () => (
    <>
      <div className={styles.copy}>
        $font-family-copy
      </div>

      <div className={styles.monospace}>
        $font-family-monospace
      </div>
    </>
  ));
