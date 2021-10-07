import { ReactNode } from "react";
import styles from "./styles.module.scss";

export type PartialNewspaperProps = {
  children?: ReactNode;
};

export const PartialNewspaper = ({
  children,
}: PartialNewspaperProps): JSX.Element => (
  <div className={styles.PartialNewspaper}>{children}</div>
);
