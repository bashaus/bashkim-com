import { ReactNode } from "react";

import Menu from "@/components/Menu";
import MenuButtonSettings from "@/components/MenuButtonSettings";
import Navigation from "@/components/Navigation";
import { useNavigation } from "@/contexts/Navigation/context";

import styles from "./styles.module.scss";

export type HeaderProps = Readonly<{
  backButton?: ReactNode;
}>;

export default function Header({ backButton }: HeaderProps) {
  const { navigationState } = useNavigation();

  return (
    <header
      className={styles["Header"]}
      data-context-navigation-scroll-at-top={navigationState.scrollAtTop}
    >
      <div className={styles["Container"]}>
        <Menu backButton={backButton} />
        <Navigation />
        <div className={styles["SettingsButton"]}>
          <MenuButtonSettings />
        </div>
      </div>
    </header>
  );
}
