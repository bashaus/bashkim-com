import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const PartialFullImage = ({ children }) => (
  <div className={styles.PartialFullImage}>
    {children}
  </div>
);

PartialFullImage.propTypes = {
  children: PropTypes.node,
};

PartialFullImage.defaultProps = {
  children: null,
};

export default PartialFullImage;
