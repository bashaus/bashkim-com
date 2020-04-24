import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const PartialSubtitle = ({ children }) => (
  <div className={styles.PartialSubtitle}>
    {children}
  </div>
);

PartialSubtitle.propTypes = {
  children: PropTypes.node,
};

PartialSubtitle.defaultProps = {
  children: null,
};

export default PartialSubtitle;
