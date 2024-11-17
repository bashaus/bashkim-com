import { ReactNode } from "react";

import { useNavigation } from "../../contexts/Navigation/context";
import { Menu } from "../Menu";
import { MenuButtonSettings } from "../MenuButtonSettings";
import { Navigation } from "../Navigation";
import styles from "./styles.module.scss";

export type HeaderProps = {
  backButton?: ReactNode;
};

export const Header = ({ backButton }: HeaderProps) => {
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
};
