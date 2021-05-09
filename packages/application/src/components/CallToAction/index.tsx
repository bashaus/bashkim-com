import styles from "./styles.module.scss";

export type CallToActionProps = {
  children: React.ReactNode;
};

export const CallToAction = ({ children }: CallToActionProps): JSX.Element => (
  <div className={styles.CallToAction}>{children}</div>
);
