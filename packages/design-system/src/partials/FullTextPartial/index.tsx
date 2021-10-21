import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import styles from "./styles.module.scss";

export type FullTextPartialProps = {
  children?: ReactNode;
};

export const FullTextPartial = ({
  children,
}: FullTextPartialProps): JSX.Element => (
  <RichTextFormatter className={styles.FullTextPartial}>
    {children}
  </RichTextFormatter>
);
