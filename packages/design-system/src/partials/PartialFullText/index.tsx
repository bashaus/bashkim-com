import { ReactNode } from "react";

import { FormattedRichText } from "../../formatters/FormattedRichText";

import styles from "./styles.module.scss";

export type PartialFullTextProps = {
  children?: ReactNode;
};

export const PartialFullText = ({
  children,
}: PartialFullTextProps): JSX.Element => (
  <FormattedRichText className={styles.PartialFullText}>
    {children}
  </FormattedRichText>
);
