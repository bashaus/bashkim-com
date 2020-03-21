import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

export default function PartialFullImage(props) {
  const { children } = props;

  return (
    <div className={styles.PartialFullImage}>
      {children}
    </div>
  );
}

PartialFullImage.propTypes = {
  children: PropTypes.node,
};

PartialFullImage.defaultProps = {
  children: null,
};
