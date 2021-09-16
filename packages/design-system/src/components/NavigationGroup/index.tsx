import classNames from "classnames";
import React, { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type NavigationGroupProps = HTMLAttributes<HTMLUListElement>;

export const NavigationGroup = ({
  className,
  ...props
}: NavigationGroupProps): JSX.Element => (
  <ul className={classNames(className, styles.NavigationGroup)} {...props} />
);
