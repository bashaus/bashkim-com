import React from "react";
import { CSSProperties } from "react";

import styles from "./style.module.scss";

export type PartialSplitItemProps = {
  backgroundImage?: string;
  children?: React.ReactNode;
};

export const PartialSplitItem = ({
  backgroundImage,
  children,
}: PartialSplitItemProps): JSX.Element => {
  const style: CSSProperties = {};
  const className = [styles.PartialSplitItem];

  if (backgroundImage) {
    style.backgroundImage = `url("${backgroundImage}")`;
    className.push(styles.Background);
    className.push("PartialSplit_chevron");
  } else {
    className.push(styles.Foreground);
  }

  return (
    <div className={className.join(" ")} style={style}>
      {children}
    </div>
  );
};
