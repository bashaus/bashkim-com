import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type FooterLinksProps = ComponentPropsWithoutRef<"ul">;

export default function FooterLinks(props: FooterLinksProps) {
  return <ul className={styles["FooterLinks"]} {...props} />;
}
