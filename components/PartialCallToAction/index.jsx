import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

export default function PartialCallToAction(props) {
  const { children } = props;

  return (
    <div className={styles.PartialCallToAction}>
      {children}
    </div>
  );
}

PartialCallToAction.propTypes = {
  children: PropTypes.node.isRequired,
};
