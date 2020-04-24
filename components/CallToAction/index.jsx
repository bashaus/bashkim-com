import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const CallToAction = ({ children = null }) => (
  <div className={styles.CallToAction}>
    {children}
  </div>
);

CallToAction.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CallToAction;
