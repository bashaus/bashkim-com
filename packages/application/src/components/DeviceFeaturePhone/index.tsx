import styles from "./styles.module.scss";

export type DeviceFeaturePhoneProps = {
  children: React.ReactNode;
  figure: React.ReactNode;
};

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
