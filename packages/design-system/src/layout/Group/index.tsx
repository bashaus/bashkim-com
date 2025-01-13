import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";
import { GroupDesign } from "./types";

export type GroupProps = ComponentPropsWithoutRef<"div"> & {
  design?: GroupDesign;
};

export default function Group({
  className,
  design = GroupDesign.DEFAULT,
  ...props
}: GroupProps) {
  return (
    <section
      className={classNames(
        className,
        styles["Group"],
        design === GroupDesign.ALTERNATE ? styles["isAlternate"] : undefined,
      )}
      {...props}
    />
  );
}
