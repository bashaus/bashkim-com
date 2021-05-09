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
    <div className={styles.wrapper}>
      <div className={styles.content}>{figure}</div>
    </div>
    <figcaption>{children}</figcaption>
  </figure>
);
