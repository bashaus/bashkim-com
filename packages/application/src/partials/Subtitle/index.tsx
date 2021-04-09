import styles from "./styles.module.scss";

type PartialSubtitleProps = {
  children?: React.ReactNode;
};

const PartialSubtitle = ({ children }: PartialSubtitleProps): JSX.Element => (
  <div className={styles.PartialSubtitle}>{children}</div>
);

export default PartialSubtitle;
