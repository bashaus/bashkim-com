import { Logo, MenuButton } from "@bashkim-com/design-system";
import Link from "next/link";
import { ComponentPropsWithRef, ReactNode } from "react";

import { MenuButtonSettings } from "../MenuButtonSettings";
import styles from "./styles.module.scss";

export type MenuProps = ComponentPropsWithRef<"div"> & {
  backButton?: ReactNode;
};

export const Menu = ({ backButton, ...restProps }: MenuProps) => (
  <div className={styles["Menu"]} {...restProps}>
    <div className={styles["BackButton"]}>{backButton ?? <MenuButton />}</div>

    <div className={styles["Title"]}>
      <Link href="/">
        <Logo />
      </Link>
    </div>

    <div className={styles["SettingsButton"]}>
      <MenuButtonSettings />
    </div>
  </div>
);
