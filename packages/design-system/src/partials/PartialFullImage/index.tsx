import classNames from "classnames";
import React, { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

export type PartialFullImageProps = HTMLAttributes<HTMLDivElement>;

export const PartialFullImage = ({
  className,
  ...props
}: PartialFullImageProps): JSX.Element => (
  <div className={classNames(className, styles.PartialFullImage)} {...props} />
);
