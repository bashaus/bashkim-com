import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type LogoProps = ComponentPropsWithoutRef<"div">;

export const Logo = ({ className, ...props }: LogoProps) => (
  <div className={classNames(className, styles["Logo"])} {...props}>
    <strong className={styles["Name"]}>Bashkim Isai</strong>
    <span className={styles["Title"]}>Creative Technologist</span>
  </div>
);
