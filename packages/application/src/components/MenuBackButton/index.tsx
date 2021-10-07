import { ReactNode } from "react";
import styles from "./styles.module.scss";

export type MenuBackButtonProps = {
  children?: ReactNode;
};

export const MenuBackButton = ({
  children,
}: MenuBackButtonProps): JSX.Element => (
  <span className={styles.MenuBackButton}>{children}</span>
);
