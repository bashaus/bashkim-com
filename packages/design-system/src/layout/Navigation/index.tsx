import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type NavigationProps = ComponentPropsWithoutRef<"div">;

export const Navigation = ({ children, ...props }: NavigationProps) => (
  <div className={styles["Navigation"]} {...props}>
    <div className={styles["Content"]}>{children}</div>
  </div>
);
