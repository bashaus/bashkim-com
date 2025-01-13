import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type NewspaperPartialProps = ComponentPropsWithoutRef<"div">;

export default function NewspaperPartial({
  className,
  ...props
}: NewspaperPartialProps) {
  return (
    <div
      className={classNames(className, styles["NewspaperPartial"])}
      {...props}
    />
  );
}
