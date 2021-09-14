import React from "react";
import styles from "./styles.module.scss";

export type DeviceFeaturePhoneProps = {
  children: React.ReactNode;
  figure: React.ReactNode;
};

/**
 * A scrollable screenshot encapsulated by a feature phone design.
 */
export const DeviceFeaturePhone = ({
  children,
  figure,
}: DeviceFeaturePhoneProps): JSX.Element => (
  <figure className={styles.DeviceFeaturePhone}>
    <div className={styles.Wrapper}>
      <div className={styles.Content}>{figure}</div>
    </div>
    <figcaption>{children}</figcaption>
  </figure>
);
