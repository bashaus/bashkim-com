import classNames from "classnames";
import { HTMLAttributes } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import styles from "./styles.module.scss";

export type SubtitlePartialProps = HTMLAttributes<HTMLDivElement>;

export const SubtitlePartial = ({
  className,
  children,
  ...props
}: SubtitlePartialProps): JSX.Element => (
  <div className={classNames(className, styles.SubtitlePartial)} {...props}>
    <RichTextFormatter>{children}</RichTextFormatter>
  </div>
);
