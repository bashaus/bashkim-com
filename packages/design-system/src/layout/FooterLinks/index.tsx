import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type FooterLinksProps = ComponentPropsWithoutRef<"ul">;

export const FooterLinks = (props: FooterLinksProps) => (
  <ul className={styles["FooterLinks"]} {...props} />
);
