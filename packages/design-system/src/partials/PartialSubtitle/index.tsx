import classNames from "classnames";
import React, { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type PartialSubtitleProps = HTMLAttributes<HTMLDivElement>;

export const PartialSubtitle = ({
  className,
  ...props
}: PartialSubtitleProps): JSX.Element => (
  <div className={classNames(className, styles.PartialSubtitle)} {...props} />
);
