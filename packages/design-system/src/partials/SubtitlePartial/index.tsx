import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import RichTextFormatter from "../../formatters/RichTextFormatter";
import styles from "./styles.module.scss";

export type SubtitlePartialProps = Readonly<ComponentPropsWithoutRef<"div">>;

export default function SubtitlePartial({
  children,
  className,
  ...props
}: SubtitlePartialProps) {
  return (
    <div
      className={classNames(className, styles["SubtitlePartial"])}
      {...props}
    >
      <RichTextFormatter>{children}</RichTextFormatter>
    </div>
  );
}
