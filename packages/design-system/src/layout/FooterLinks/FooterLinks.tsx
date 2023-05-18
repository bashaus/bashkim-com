import { ComponentPropsWithoutRef } from "react";

import styles from "./FooterLinks.module.scss";

export type FooterLinksProps = ComponentPropsWithoutRef<"ul">;

export const FooterLinks = (props: FooterLinksProps) => (
  <ul className={styles["FooterLinks"]} {...props} />
);
