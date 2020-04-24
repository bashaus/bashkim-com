import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const DeviceSmartphone = ({ children, figure }) => (
  <figure className={styles.DeviceSmartphone}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        { figure }
      </div>
    </div>

    <figcaption>
      <p>{ children }</p>
    </figcaption>
  </figure>
);

DeviceSmartphone.propTypes = {
  children: PropTypes.node.isRequired,
  figure: PropTypes.node.isRequired,
};

export default DeviceSmartphone;
