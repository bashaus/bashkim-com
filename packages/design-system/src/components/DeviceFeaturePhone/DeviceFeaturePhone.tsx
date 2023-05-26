import { ReactNode } from "react";

import DeviceVector from "../../assets/vectors/devices/feature-phone.svg";
import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import styles from "./DeviceFeaturePhone.module.scss";

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
}: DeviceFeaturePhoneProps) => (
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
