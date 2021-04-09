import styles from "./styles.module.scss";

type PartialFullTextProps = {
  children?: React.ReactNode;
};

const PartialFullText = ({ children }: PartialFullTextProps): JSX.Element => (
  <div className={styles.PartialFullText}>{children}</div>
);

export default PartialFullText;
