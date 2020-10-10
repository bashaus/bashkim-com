import classNames from "classnames";
import React from "react";

import Logo from "%components/Logo";
import Navigation from "%components/Navigation";
import { NavigationContext } from "%contexts/Navigation";

import styles from "./styles.module.scss";

type HeaderProps = {
  theme: string;
};

const Header = ({ theme }: HeaderProps): JSX.Element => {
  const { state: navigationState } = React.useContext(NavigationContext);

  return (
    <header
      className={classNames({
        [styles.header]: true,
        [styles.atTop]: navigationState.atTop,
        [styles.isVisible]: navigationState.isVisible,
      })}
    >
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Logo />
        </div>
        <Navigation theme={theme} />
      </div>
    </header>
  );
};

export default Header;
