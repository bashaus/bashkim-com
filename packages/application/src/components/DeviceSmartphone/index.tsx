import styles from "./styles.module.scss";

export type DeviceSmartphoneProps = {
  children: React.ReactNode;
  figure: React.ReactNode;
};

export const DeviceSmartphone = ({
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
