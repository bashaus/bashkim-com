import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type NavigationGroupProps = ComponentPropsWithoutRef<"ul">;

export default function NavigationGroup({
  className,
  ...props
}: NavigationGroupProps) {
  return (
    <ul
      className={classNames(className, styles["NavigationGroup"])}
      {...props}
    />
  );
}
