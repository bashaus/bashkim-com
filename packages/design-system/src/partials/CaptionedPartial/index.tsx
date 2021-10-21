import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import styles from "./styles.module.scss";

export type CaptionedPartialProps = {
  children: ReactNode;

  /**
   * An image, canvas, etc. which represents the figure
   */
  figure: ReactNode;
};

export const CaptionedPartial = ({
  children,
  figure,
}: CaptionedPartialProps): JSX.Element => (
  <figure className={styles.CaptionedPartial}>
    <figcaption className={styles.Caption}>
      <RichTextFormatter>{children}</RichTextFormatter>
    </figcaption>
    <div className={styles.Figure}>{figure}</div>
  </figure>
);
