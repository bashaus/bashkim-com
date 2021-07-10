import classNames from "classnames";
import Link from "next/link";
import { useContext } from "react";

import { Logo } from "%components/Logo";
import { Navigation } from "%components/Navigation";

import { NavigationContext } from "%contexts/Navigation/context";

import styles from "./styles.module.scss";

export type HeaderProps = {
  theme: string;
};

export const Header = ({ theme }: HeaderProps): JSX.Element => {
  const { state: navigationState } = useContext(NavigationContext);

  return (
    <header
      className={classNames({
        [styles.header]: true,
        [styles.scrollAtTop]: navigationState.scrollAtTop,
        [styles.menuIsVisible]: navigationState.menuIsVisible,
      })}
    >
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <Navigation theme={theme} />
      </div>
    </header>
  );
};
