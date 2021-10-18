import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";

import styles from "./styles.module.scss";

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
}: DeviceSmartphoneProps): JSX.Element => (
  <figure className={styles.DeviceSmartphone}>
    <div className={styles.Wrapper}>
      <div className={styles.Content}>{figure}</div>
    </div>

    <figcaption>
      <RichTextFormatter>{children}</RichTextFormatter>
    </figcaption>
  </figure>
);
