import classNames from "classnames";
import React, { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type NavigationItemProps = HTMLAttributes<HTMLLIElement> & {
  isSelected?: boolean;
};

export const NavigationItem = ({
  className,
  isSelected = false,
  ...props
}: NavigationItemProps): JSX.Element => (
  <li
    className={classNames(className, styles.NavigationItem)}
    aria-current={isSelected ? "location" : undefined}
    {...props}
  />
);
