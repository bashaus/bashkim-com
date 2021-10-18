import { ReactNode } from "react";
import styles from "./styles.module.scss";

export type NewspaperPartialProps = {
  children?: ReactNode;
};

export const NewspaperPartial = ({
  children,
}: NewspaperPartialProps): JSX.Element => (
  <div className={styles.NewspaperPartial}>{children}</div>
);
