import { ComponentPropsWithoutRef } from "react";

import styles from "./Footer.module.scss";

export type FooterProps = ComponentPropsWithoutRef<"div">;

export const Footer = (props: FooterProps) => (
  <footer className={styles["Footer"]} {...props} />
);
