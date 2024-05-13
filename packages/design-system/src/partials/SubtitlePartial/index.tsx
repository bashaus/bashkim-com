import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import styles from "./styles.module.scss";

export type SubtitlePartialProps = ComponentPropsWithoutRef<"div">;

export const SubtitlePartial = ({
  children,
  className,
  ...props
}: SubtitlePartialProps) => (
  <div className={classNames(className, styles["SubtitlePartial"])} {...props}>
    <RichTextFormatter>{children}</RichTextFormatter>
  </div>
);
