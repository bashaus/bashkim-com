import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export default function PartialHeaderText(props) {
  const { backgroundClassName, children } = props;

  return (
    <header className={styles.PartialHeaderText}>
      <div className={styles.foreground}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
      <div
        className={`${styles.background} ${backgroundClassName || ''}`}
        aria-hidden="true"
      />
    </header>
  );
}

PartialHeaderText.propTypes = {
  backgroundClassName: PropTypes.string,
  children: PropTypes.node,
};

PartialHeaderText.defaultProps = {
  backgroundClassName: null,
  children: null,
};
