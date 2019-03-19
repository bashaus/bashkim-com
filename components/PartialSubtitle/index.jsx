import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

export default function PartialSubtitle(props) {
  const { children } = props;

  return (
    <div className={styles.PartialSubtitle}>
      {children}
    </div>
  );
}

PartialSubtitle.propTypes = {
  children: PropTypes.node,
};

PartialSubtitle.defaultProps = {
  children: null,
};
