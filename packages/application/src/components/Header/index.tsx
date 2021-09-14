import classNames from "classnames";
import Link from "next/link";
import { useContext } from "react";

import { Logo } from "@bashkim-com/design-system";

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
      className={classNames(styles.Header, {
        [styles.isAtScrollTop]: navigationState.scrollAtTop,
        [styles.isMenuVisible]: navigationState.menuIsVisible,
      })}
    >
      <div className={styles.Container}>
        <div className={styles.Logo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <Navigation theme={theme} />
      </div>
    </header>
  );
};
