import { ReactNode } from "react";

import RichTextFormatter from "../../formatters/RichTextFormatter";
import styles from "./styles.module.scss";

export type FullTextPartialProps = {
  children?: ReactNode;
};

export default function FullTextPartial({ children }: FullTextPartialProps) {
  return (
    <div className={styles["FullTextPartial"]}>
      <RichTextFormatter>{children}</RichTextFormatter>
    </div>
  );
}
