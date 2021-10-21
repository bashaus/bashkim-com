import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";

import styles from "./styles.module.scss";

export type DeviceFeaturePhoneProps = {
  /**
   * A caption of the figure, styled in rich text
   */
  children?: ReactNode;

  /**
   * The `<img />` to display as the feature phone screen
   */
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
    {children && (
      <figcaption>
        <RichTextFormatter>{children}</RichTextFormatter>
      </figcaption>
    )}
  </figure>
);
