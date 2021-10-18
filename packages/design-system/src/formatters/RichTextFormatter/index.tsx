import classNames from "classnames";
import { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type RichTextFormatterProps = HTMLAttributes<HTMLDivElement>;

export const RichTextFormatter = ({
  className,
  ...props
}: RichTextFormatterProps): JSX.Element => (
  <div className={classNames(className, styles.RichTextFormatter)} {...props} />
);
