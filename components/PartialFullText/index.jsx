import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const PartialFullText = ({ children }) => (
  <div className={styles.PartialFullText}>
    {children}
  </div>
);

PartialFullText.propTypes = {
  children: PropTypes.node,
};

PartialFullText.defaultProps = {
  children: null,
};

export default PartialFullText;
