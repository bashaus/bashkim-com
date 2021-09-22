import React, { HTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type FooterLinksProps = HTMLAttributes<HTMLUListElement>;

export const FooterLinks = ({
  className,
  ...props
}: FooterLinksProps): JSX.Element => (
  <ul className={classNames(className, styles.FooterLinks)} {...props} />
);
