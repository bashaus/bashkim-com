import { PropsWithChildren, ReactNode } from "react";

import DeviceVector from "../../assets/vectors/devices/smartphone.svg";
import RichTextFormatter from "../../formatters/RichTextFormatter";
import styles from "./styles.module.scss";

export type DeviceSmartphoneProps = Readonly<
  PropsWithChildren<{
    figure: ReactNode;
  }>
>;

/**
 * A scrollable screenshot encapsulated by a smartphone design.
 */
export default function DeviceSmartphone({
  children,
  figure,
}: DeviceSmartphoneProps) {
  return (
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
}
