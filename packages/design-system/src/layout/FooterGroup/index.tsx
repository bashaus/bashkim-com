import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type FooterGroupProps = ComponentPropsWithoutRef<"div">;

export const FooterGroup = ({ className, ...props }: FooterGroupProps) => (
  <div className={classNames(className, styles["FooterGroup"])} {...props} />
);
