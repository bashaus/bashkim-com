import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

export default function PartialFullText(props) {
  const { children } = props;

  return (
    <div className={styles.PartialFullText}>
      {children}
    </div>
  );
}

PartialFullText.propTypes = {
  children: PropTypes.node,
};

PartialFullText.defaultProps = {
  children: null,
};
