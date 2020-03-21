import React from 'react';

import styles from './styles.module.scss';

export default function FooterCopyright() {
  return (
    <p
      className={styles.FooterCopyright}
      role="contentinfo"
      aria-label="Copyright, Two-Thousand-and-Eight to Two-Thousand-and-Nineteen, Bashkim Isai. All rights reserved."
    >
      <span aria-hidden="true">
        Copyright &copy;
        {' '}
        <time dateTime="2008" title="2008">MMVIII</time>
        &#x2011;
        <time dateTime="2019" title="2019">MMXIX</time>
        , Bashkim&nbsp;Isai. All&nbsp;rights&nbsp;reserved.
      </span>
    </p>
  );
}
