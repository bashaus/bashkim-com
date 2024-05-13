import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type NavigationGroupProps = ComponentPropsWithoutRef<"ul">;

export const NavigationGroup = ({
  className,
  ...props
}: NavigationGroupProps) => (
  <ul className={classNames(className, styles["NavigationGroup"])} {...props} />
);
