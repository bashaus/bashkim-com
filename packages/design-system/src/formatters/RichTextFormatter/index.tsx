import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type RichTextFormatterProps = ComponentPropsWithoutRef<"div">;

export default function RichTextFormatter({
  className,
  ...props
}: RichTextFormatterProps) {
  return (
    <div
      className={classNames(className, styles["RichTextFormatter"])}
      {...props}
    />
  );
}
