import { PropsWithChildren, ReactNode } from "react";

import DeviceVector from "../../assets/vectors/devices/feature-phone.svg";
import RichTextFormatter from "../../formatters/RichTextFormatter";
import styles from "./styles.module.scss";

export type DeviceFeaturePhoneProps = Readonly<
  PropsWithChildren<{
    figure: ReactNode;
  }>
>;

/**
 * A scrollable screenshot encapsulated by a feature phone design.
 */
export default function DeviceFeaturePhone({
  children,
  figure,
}: DeviceFeaturePhoneProps) {
  return (
    <figure className={styles["DeviceFeaturePhone"]}>
      <div className={styles["Wrapper"]}>
        <DeviceVector className={styles["Device"]} />
        <div className={styles["Figure"]}>{figure}</div>
      </div>

      {children && (
        <figcaption className={styles["Caption"]}>
          <RichTextFormatter>{children}</RichTextFormatter>
        </figcaption>
      )}
    </figure>
  );
}
