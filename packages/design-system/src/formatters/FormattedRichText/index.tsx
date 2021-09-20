import classNames from "classnames";
import React, { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type FormattedRichTextProps = HTMLAttributes<HTMLDivElement>;

export const FormattedRichText = ({
  className,
  ...props
}: FormattedRichTextProps): JSX.Element => (
  <div className={classNames(className, styles.FormattedRichText)} {...props} />
);
