import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

export default function PartialHeaderText(props) {
  const { aside, backgroundClassName, children } = props;

  return (
    <header className={styles.PartialHeaderText}>
      <div className={styles.foreground}>
        <div className={styles.content}>
          {children}
        </div>

        {aside && (
          <aside className={styles.aside}>
            {aside}
          </aside>
        )}
      </div>

      <div
        className={`${styles.background} ${backgroundClassName || ''}`}
        aria-hidden="true"
      />
    </header>
  );
}

PartialHeaderText.propTypes = {
  aside: PropTypes.node,
  backgroundClassName: PropTypes.string,
  children: PropTypes.node,
};

PartialHeaderText.defaultProps = {
  aside: null,
  backgroundClassName: null,
  children: null,
};
