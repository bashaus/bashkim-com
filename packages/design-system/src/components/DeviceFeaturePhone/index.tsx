import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";

import styles from "./styles.module.scss";

export type DeviceFeaturePhoneProps = {
  children: ReactNode;
  figure: ReactNode;
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
    <figcaption>
      <RichTextFormatter>{children}</RichTextFormatter>
    </figcaption>
  </figure>
);
