import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type NavigationItemProps = Readonly<
  ComponentPropsWithoutRef<"li"> & {
    isSelected?: boolean;
  }
>;

export default function NavigationItem({
  className,
  isSelected = false,
  ...props
}: NavigationItemProps) {
  return (
    <li
      className={classNames(className, styles["NavigationItem"])}
      aria-current={isSelected ? "location" : undefined}
      {...props}
    />
  );
}
