import styles from "./styles.module.scss";

export type PartialFullImageProps = {
  children?: React.ReactNode;
};

export const PartialFullImage = ({
  children,
}: PartialFullImageProps): JSX.Element => (
  <div className={styles.PartialFullImage}>{children}</div>
);
