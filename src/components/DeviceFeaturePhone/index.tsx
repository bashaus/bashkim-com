import React from 'react';

import styles from './styles.module.scss';

interface DeviceFeaturePhoneProps {
  children: React.ReactNode;
  figure: React.ReactNode;
}

const DeviceFeaturePhone = ({
  children,
  figure,
}: DeviceFeaturePhoneProps): JSX.Element => (
  <figure className={styles.DeviceFeaturePhone}>
    <div className={styles.wrapper}>
      <div className={styles.content}>{figure}</div>
    </div>
    <figcaption>
      {children}
    </figcaption>
  </figure>
);

export default DeviceFeaturePhone;
