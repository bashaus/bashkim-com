import classNames from "classnames";
import React, { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type PartialSplitProps = HTMLAttributes<HTMLDivElement> & {
  index?: number;
};

export const PartialSplit = ({
  className,
  index = 0,
  ...props
}: PartialSplitProps): JSX.Element => (
  <div
    className={classNames(className, styles.PartialSplit, {
      [styles.isOdd]: index % 2 === 1,
      [styles.isEven]: index % 2 === 0,
    })}
    {...props}
  />
);
