import styles from "./styles.module.scss";

export type MenuBackButtonProps = {
  children?: React.ReactNode;
};

export const MenuBackButton = ({
  children,
}: MenuBackButtonProps): JSX.Element => (
  <span className={styles.MenuBackButton}>{children}</span>
);
