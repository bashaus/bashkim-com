import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.scss";

export type MenuButtonProps = ComponentPropsWithoutRef<"button">;

export const MenuButton = ({
  className,
  type = "button",
  onClick,
  ...props
}: MenuButtonProps) => (
  <button
    data-testid="MenuButton"
    className={classNames(
      className,
      styles["MenuButton"],
      onClick ? styles["clickable"] : undefined,
    )}
    type={type}
    onClick={onClick}
    {...props}
  />
);
