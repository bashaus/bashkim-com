import styles from "./styles.module.scss";

export type PartialFullTextProps = {
  children?: React.ReactNode;
};

export const PartialFullText = ({
  children,
}: PartialFullTextProps): JSX.Element => (
  <div className={styles.PartialFullText}>{children}</div>
);
