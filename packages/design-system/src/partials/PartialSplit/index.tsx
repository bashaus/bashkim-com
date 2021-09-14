import React from "react";
import { PartialSplitItem } from "../PartialSplitItem";

import styles from "./styles.module.scss";

export type PartialSplitProps = {
  index?: number;
  children?: React.ReactNode;
};

export const PartialSplit = ({
  children,
  index = 0,
}: PartialSplitProps): JSX.Element => {
  const className = [
    styles.PartialSplit,
    index % 2 === 1 ? styles.isOdd : styles.isEven,
  ].join(" ");

  return <div className={className}>{children}</div>;
};

PartialSplit.Item = PartialSplitItem;
