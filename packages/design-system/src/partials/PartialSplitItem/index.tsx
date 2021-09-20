import classNames from "classnames";
import React, { CSSProperties, HTMLAttributes } from "react";

import { FormattedRichText } from "../../formatters/FormattedRichText";

import styles from "./style.module.scss";

export type PartialSplitItemProps = HTMLAttributes<HTMLDivElement> & {
  backgroundImage?: string;
  children?: React.ReactNode;
};

export const PartialSplitItem = ({
  backgroundImage,
  className,
  children,
}: PartialSplitItemProps): JSX.Element => {
  const style: CSSProperties = {};

  if (backgroundImage) {
    style.backgroundImage = `url("${backgroundImage}")`;
  }

  return (
    <FormattedRichText
      style={style}
      className={classNames(styles.PartialSplitItem, className, {
        PartialSplit_chevron: !!backgroundImage,
        [styles.Background]: !!backgroundImage,
        [styles.Foreground]: !backgroundImage,
      })}
    >
      {children}
    </FormattedRichText>
  );
};
