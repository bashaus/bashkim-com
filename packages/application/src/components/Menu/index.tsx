import classNames from "classnames";
import Link from "next/link";
import { useContext } from "react";

import { Logo } from "@bashkim-com/design-system";
import { MenuSignifierButton } from "%components/MenuSignifierButton";
import { NavigationContext } from "%contexts/Navigation/context";
import { ScrollDirection } from "%contexts/Navigation/types";

import styles from "./styles.module.scss";

export type MenuProps = {
  backButton?: React.ReactNode;
};

export const Menu = ({ backButton }: MenuProps): JSX.Element => {
  const { state: navigationState } = useContext(NavigationContext);

  return (
    <div
      className={classNames(styles.Menu, {
        [styles.isVisible]:
          navigationState.scrollAtTop ||
          navigationState.menuIsVisible ||
          navigationState.scrollDirection === ScrollDirection.DOWN,
      })}
    >
      <div className={styles.Back}>{backButton}</div>

      <div className={styles.Logo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className={styles.Signifier} aria-label="Menu">
        <MenuSignifierButton />
      </div>
    </div>
  );
};
