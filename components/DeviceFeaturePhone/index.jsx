import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const DeviceFeaturePhone = ({ children, figure }) => (
  <figure className={styles.DeviceFeaturePhone}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {figure}
      </div>
    </div>
    <figcaption>
      <p>{ children }</p>
    </figcaption>
  </figure>
);

DeviceFeaturePhone.propTypes = {
  children: PropTypes.node.isRequired,
  figure: PropTypes.node.isRequired,
};

export default DeviceFeaturePhone;
