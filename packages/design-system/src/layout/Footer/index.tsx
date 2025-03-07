import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type FooterProps = Readonly<ComponentPropsWithoutRef<"div">>;

export default function Footer(props: FooterProps) {
  return <footer className={styles["Footer"]} {...props} />;
}
