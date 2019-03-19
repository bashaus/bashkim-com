import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

export default function CallToAction(props) {
  const { children } = props;

  return (
    <div className={styles.CallToAction}>
      {children}
    </div>
  );
}

CallToAction.propTypes = {
  children: PropTypes.node.isRequired,
};
