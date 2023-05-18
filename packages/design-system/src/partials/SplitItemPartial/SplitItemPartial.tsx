import classNames from "classnames";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import styles from "./SplitItemPartial.module.scss";

export type SplitItemPartialProps = ComponentPropsWithoutRef<"div"> & {
  backgroundImage?: string;
  children?: ReactNode;
};

export const SplitItemPartial = ({
  backgroundImage,
  className,
  children,
  ...props
}: SplitItemPartialProps) => (
  <div
    style={{
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    }}
    className={classNames(
      className,
      styles["SplitItemPartial"],
      !!backgroundImage && "SplitPartial_chevron",
      !!backgroundImage && styles["hasBackground"],
      !backgroundImage && styles["hasNoBackground"]
    )}
    {...props}
  >
    <RichTextFormatter>{children}</RichTextFormatter>
  </div>
);
