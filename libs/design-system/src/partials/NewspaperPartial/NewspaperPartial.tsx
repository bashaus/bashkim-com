import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./NewspaperPartial.module.scss";

export type NewspaperPartialProps = ComponentPropsWithoutRef<"div">;

export const NewspaperPartial = ({
  className,
  ...props
}: NewspaperPartialProps) => (
  <div
    className={classNames(className, styles["NewspaperPartial"])}
    {...props}
  />
);
