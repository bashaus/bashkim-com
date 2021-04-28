import classNames from "classnames";
import React, { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export enum GroupDesign {
  DEFAULT = "default",
  ALTERNATE = "alternate",
}

export type GroupProps = HTMLAttributes<HTMLDivElement> & {
  design?: GroupDesign;
};

export const Group = ({
  className,
  design = GroupDesign.DEFAULT,
  ...props
}: GroupProps): JSX.Element => (
  <section
    className={classNames(className, styles.Group)}
    data-props-design={design}
    {...props}
  />
);
