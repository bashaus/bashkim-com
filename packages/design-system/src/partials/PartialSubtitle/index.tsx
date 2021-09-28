import classNames from "classnames";
import React, { HTMLAttributes } from "react";

import { FormattedRichText } from "../../formatters/FormattedRichText";

import styles from "./styles.module.scss";

export type PartialSubtitleProps = HTMLAttributes<HTMLDivElement>;

export const PartialSubtitle = ({
  className,
  children,
  ...props
}: PartialSubtitleProps): JSX.Element => (
  <div className={classNames(className, styles.PartialSubtitle)} {...props}>
    <FormattedRichText>{children}</FormattedRichText>
  </div>
);
