import { ReactNode } from "react";

import DeviceVector from "../../assets/vectors/devices/smartphone.svg";
import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import styles from "./DeviceSmartphone.module.scss";

export type DeviceSmartphoneProps = {
  children: ReactNode;
  figure: ReactNode;
};

/**
 * A scrollable screenshot encapsulated by a smartphone design.
 */
export const DeviceSmartphone = ({
  children,
  figure,
}: DeviceSmartphoneProps) => (
  <figure className={styles["DeviceSmartphone"]}>
    <div className={styles["Wrapper"]}>
      <DeviceVector className={styles["Device"]} />
      <div className={styles["Figure"]}>{figure}</div>
    </div>

    <figcaption className={styles["Caption"]}>
      <RichTextFormatter>{children}</RichTextFormatter>
    </figcaption>
  </figure>
);
