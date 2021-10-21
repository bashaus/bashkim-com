import classNames from "classnames";
import { CSSProperties, HTMLAttributes, ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import styles from "./style.module.scss";

export type SplitItemPartialProps = HTMLAttributes<HTMLDivElement> & {
  backgroundImage?: string;
  children?: ReactNode;
};

export const SplitItemPartial = ({
  backgroundImage,
  className,
  children,
}: SplitItemPartialProps): JSX.Element => {
  const style: CSSProperties = {};

  if (backgroundImage) {
    style.backgroundImage = `url("${backgroundImage}")`;
  }

  return (
    <RichTextFormatter
      style={style}
      className={classNames(styles.SplitItemPartial, className, {
        SplitPartial_chevron: !!backgroundImage,
        [styles.Background]: !!backgroundImage,
        [styles.Foreground]: !backgroundImage,
      })}
    >
      {children}
    </RichTextFormatter>
  );
};
