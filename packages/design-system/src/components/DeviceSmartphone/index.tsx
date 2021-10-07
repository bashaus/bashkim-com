import { ReactNode } from "react";

import { FormattedRichText } from "../../formatters/FormattedRichText";

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
      <FormattedRichText>{children}</FormattedRichText>
    </figcaption>
  </figure>
);
