import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type SplitPartialProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    index?: number;
  }
>;

export default function SplitPartial({
  className,
  index = 0,
  ...props
}: SplitPartialProps) {
  return (
    <div
      className={classNames(
        className,
        styles["SplitPartial"],
        index % 2 === 1 && styles["isOdd"],
        index % 2 === 0 && styles["isEven"],
      )}
      {...props}
    />
  );
}
