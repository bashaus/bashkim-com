import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./Group.module.scss";
import { GroupDesign } from "./Group.types";

export type GroupProps = ComponentPropsWithoutRef<"div"> & {
  design?: GroupDesign;
};

export const Group = ({
  className,
  design = GroupDesign.DEFAULT,
  ...props
}: GroupProps) => (
  <section
    className={classNames(
      className,
      styles["Group"],
      design === GroupDesign.ALTERNATE ? styles["isAlternate"] : undefined,
    )}
    {...props}
  />
);
