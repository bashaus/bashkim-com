import styles from "./styles.module.scss";

export type PartialNewspaperProps = {
  children?: React.ReactNode;
};

export const PartialNewspaper = ({
  children,
}: PartialNewspaperProps): JSX.Element => (
  <div className={styles.PartialNewspaper}>{children}</div>
);
