import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type FullImagePartialProps = ComponentPropsWithoutRef<"div">;

export const FullImagePartial = ({
  className,
  ...props
}: FullImagePartialProps) => (
  <div
    className={classNames(className, styles["FullImagePartial"])}
    {...props}
  />
);
