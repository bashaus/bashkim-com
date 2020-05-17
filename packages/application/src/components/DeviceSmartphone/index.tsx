import React from "react";

import styles from "./styles.module.scss";

interface DeviceSmartphoneProps {
  children: React.ReactNode;
  figure: React.ReactNode;
}

const DeviceSmartphone = ({
  children,
  figure,
}: DeviceSmartphoneProps): JSX.Element => (
  <figure className={styles.DeviceSmartphone}>
    <div className={styles.wrapper}>
      <div className={styles.content}>{figure}</div>
    </div>

    <figcaption>{children}</figcaption>
  </figure>
);

export default DeviceSmartphone;
