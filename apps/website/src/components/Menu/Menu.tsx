import { Logo, MenuButton } from "@bashkim-com/design-system";
import Link from "next/link";
import { ReactNode } from "react";

import { MenuButtonSettings } from "../MenuButtonSettings/MenuButtonSettings";
import styles from "./Menu.module.scss";

export type MenuProps = {
  backButton?: ReactNode;
};

export const Menu = ({ backButton }: MenuProps) => (
  <div className={styles["Menu"]}>
    <div className={styles["MobileOnly"]}>{backButton ?? <MenuButton />}</div>

    <div className={styles["Title"]}>
      <Link href="/">
        <Logo />
      </Link>
    </div>

    <div className={styles["MobileOnly"]}>
      <MenuButtonSettings />
    </div>
  </div>
);
