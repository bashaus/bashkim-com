import styles from "./styles.module.scss";

type MenuBackButtonProps = {
  children?: React.ReactNode;
};

const MenuBackButton = ({ children }: MenuBackButtonProps): JSX.Element => (
  <span className={styles.MenuBackButton}>{children}</span>
);

export default MenuBackButton;
