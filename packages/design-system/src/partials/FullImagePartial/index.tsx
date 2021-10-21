import classNames from "classnames";
import { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type FullImagePartialProps = HTMLAttributes<HTMLDivElement>;

export const FullImagePartial = ({
  className,
  ...props
}: FullImagePartialProps): JSX.Element => (
  <div className={classNames(className, styles.FullImagePartial)} {...props} />
);
