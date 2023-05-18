import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./RichTextFormatter.module.scss";

export type RichTextFormatterProps = ComponentPropsWithoutRef<"div">;

export const RichTextFormatter = ({
  className,
  ...props
}: RichTextFormatterProps) => (
  <div
    className={classNames(className, styles["RichTextFormatter"])}
    {...props}
  />
);
