import { ReactNode } from "react";

import { useNavigation } from "../../contexts/Navigation/Navigation.context";
import { Menu } from "../Menu/Menu";
import { MenuButtonSettings } from "../MenuButtonSettings/MenuButtonSettings";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.scss";

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
        <div className={styles["MobileHidden"]}>
          <MenuButtonSettings data-test-id="MenuButtonSettings" />
        </div>
      </div>
    </header>
  );
};
