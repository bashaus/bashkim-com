import classNames from "classnames";
import React, { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type LogoProps = HTMLAttributes<HTMLDivElement>;

export const Logo = ({ className, ...props }: LogoProps): JSX.Element => (
  <div className={classNames(className, styles.Logo)} {...props}>
    <strong>Bashkim Isai</strong>
    <span>Creative Technologist</span>
  </div>
);
