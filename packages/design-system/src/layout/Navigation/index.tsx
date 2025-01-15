import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type NavigationProps = Readonly<ComponentPropsWithoutRef<"div">>;

export default function Navigation({ children, ...props }: NavigationProps) {
  return (
    <div className={styles["Navigation"]} {...props}>
      <div className={styles["Content"]}>{children}</div>
    </div>
  );
}
