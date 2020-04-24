import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const PartialNewspaper = ({ children }) => (
  <div className={styles.PartialNewspaper}>
    { children }
  </div>
);

PartialNewspaper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PartialNewspaper;
