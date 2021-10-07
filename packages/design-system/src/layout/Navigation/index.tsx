import classNames from "classnames";
import { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type NavigationProps = HTMLAttributes<HTMLDivElement>;

export const Navigation = ({
  className,
  children,
  ...props
}: NavigationProps): JSX.Element => (
  <div className={classNames(className, styles.Navigation)} {...props}>
    <div className={styles.Content}>{children}</div>
  </div>
);
