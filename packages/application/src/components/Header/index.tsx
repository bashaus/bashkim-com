import { ReactNode, useContext } from "react";

import { Navigation } from "%components/Navigation";
import { Menu } from "%components/Menu";

import { NavigationContext } from "%contexts/Navigation/context";

import styles from "./styles.module.scss";

export type HeaderProps = {
  backButton?: ReactNode;
};

export const Header = ({ backButton }: HeaderProps): JSX.Element => {
  const { state: navigationState } = useContext(NavigationContext);
  return (
    <header
      className={styles.Header}
      data-context-navigation-scroll-at-top={navigationState.scrollAtTop}
    >
      <div className={styles.Container}>
        <Menu backButton={backButton} />
        <Navigation />
      </div>
    </header>
  );
};
