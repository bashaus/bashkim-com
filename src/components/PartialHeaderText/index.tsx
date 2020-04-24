import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface PartialHeaderTextProps {
  aside?: React.ReactNode;
  backgroundClassName?: string;
  children?: React.ReactNode;
}

const PartialHeaderText = ({
  aside,
  backgroundClassName,
  children,
}: PartialHeaderTextProps): JSX.Element => (
  <header className={styles.PartialHeaderText}>
    <div className={styles.foreground}>
      <div className={styles.content}>{children}</div>

      {aside && <aside className={styles.aside}>{aside}</aside>}
    </div>

    <div
      className={classNames(styles.background, backgroundClassName)}
      aria-hidden="true"
    />
  </header>
);

export default PartialHeaderText;
