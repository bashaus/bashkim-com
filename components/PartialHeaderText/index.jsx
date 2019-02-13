import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export default function PartialHeaderText(props) {
  const { children } = props;
  return (
    <header className={styles.PartialHeaderText}>
      <div className={styles.foreground}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
      <div className={styles.background} aria-hidden="true" />
    </header>
  );
}

PartialHeaderText.propTypes = {
  children: PropTypes.node,
};

PartialHeaderText.defaultProps = {
  children: null,
};
