import { ReactNode } from "react";

import { FormattedRichText } from "../../formatters/FormattedRichText";

import styles from "./styles.module.scss";

export type PartialCaptionedProps = {
  children: ReactNode;

  /**
   * An image, canvas, etc. which represents the figure
   */
  figure: ReactNode;
};

export const PartialCaptioned = ({
  children,
  figure,
}: PartialCaptionedProps): JSX.Element => (
  <figure className={styles.PartialCaptioned}>
    <figcaption className={styles.Caption}>
      <FormattedRichText>{children}</FormattedRichText>
    </figcaption>
    <div className={styles.Figure}>{figure}</div>
  </figure>
);
