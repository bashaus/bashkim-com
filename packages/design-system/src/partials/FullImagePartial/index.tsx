import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type FullImagePartialProps = ComponentPropsWithoutRef<"div">;

export default function FullImagePartial({
  className,
  ...props
}: FullImagePartialProps) {
  return (
    <div
      className={classNames(className, styles["FullImagePartial"])}
      {...props}
    />
  );
}
