import classNames from "classnames";
import { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

export type FooterProps = HTMLAttributes<HTMLDivElement>;

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => (
  <footer className={classNames(className, styles.Footer)} {...props} />
);
