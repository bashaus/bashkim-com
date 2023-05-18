import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./NavigationItem.module.scss";

export type NavigationItemProps = ComponentPropsWithoutRef<"li"> & {
  isSelected?: boolean;
};

export const NavigationItem = ({
  className,
  isSelected = false,
  ...props
}: NavigationItemProps) => (
  <li
    className={classNames(className, styles["NavigationItem"])}
    aria-current={isSelected ? "location" : undefined}
    {...props}
  />
);
