import classNames from "classnames";
import React, { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type FooterGroupProps = HTMLAttributes<HTMLDivElement>;

export const FooterGroup = ({
  className,
  ...props
}: FooterGroupProps): JSX.Element => (
  <div className={classNames(className, styles.FooterGroup)} {...props} />
);
