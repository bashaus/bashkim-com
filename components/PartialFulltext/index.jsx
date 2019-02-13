import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export default function PartialFulltext(props) {
  const { children } = props;

  return (
    <div className={styles.PartialFulltext}>
      {children}
    </div>
  );
}

PartialFulltext.propTypes = {
  children: PropTypes.node,
};

PartialFulltext.defaultProps = {
  children: null,
};
