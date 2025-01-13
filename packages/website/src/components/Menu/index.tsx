import "client-only";

import { Logo, MenuButton } from "@bashkim-com/design-system";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithRef, ReactNode } from "react";

import MenuButtonSettings from "../MenuButtonSettings";
import styles from "./styles.module.scss";

export type MenuProps = ComponentPropsWithRef<"div"> & {
  backButton?: ReactNode;
};

export default function Menu({ backButton, ...restProps }: MenuProps) {
  const nextPath = usePathname();
  const pathUrl = new URL(nextPath, "http://localhost");
  const { pathname } = pathUrl;

  return (
    <div className={styles["Menu"]} {...restProps}>
      <div className={styles["BackButton"]}>{backButton ?? <MenuButton />}</div>

      <div className={styles["Title"]}>
        <Link href="/">
          <Logo animated={pathname === "/"} />
        </Link>
      </div>

      <div className={styles["SettingsButton"]}>
        <MenuButtonSettings />
      </div>
    </div>
  );
}
