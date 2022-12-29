import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import styles from "./FullTextPartial.module.scss";

export type FullTextPartialProps = {
  children?: ReactNode;
};

export const FullTextPartial = ({ children }: FullTextPartialProps) => (
  <div className={styles["FullTextPartial"]}>
    <RichTextFormatter>{children}</RichTextFormatter>
  </div>
);
