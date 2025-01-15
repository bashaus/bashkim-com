import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type FooterGroupProps = Readonly<ComponentPropsWithoutRef<"div">>;

export default function FooterGroup({ className, ...props }: FooterGroupProps) {
  return (
    <div className={classNames(className, styles["FooterGroup"])} {...props} />
  );
}
