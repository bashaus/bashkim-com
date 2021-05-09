import styles from "./styles.module.scss";

export type PartialSubtitleProps = {
  children?: React.ReactNode;
};

export const PartialSubtitle = ({
  children,
}: PartialSubtitleProps): JSX.Element => (
  <div className={styles.PartialSubtitle}>{children}</div>
);
