import React from "react";

import { FormattedRichText } from "../../formatters/FormattedRichText";

import styles from "./styles.module.scss";

export type PartialFullTextProps = {
  children?: React.ReactNode;
};

export const PartialFullText = ({
  children,
}: PartialFullTextProps): JSX.Element => (
  <FormattedRichText className={styles.PartialFullText}>
    {children}
  </FormattedRichText>
);
