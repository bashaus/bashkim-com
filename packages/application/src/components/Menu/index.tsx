import classNames from "classnames";
import { useContext } from "react";

import Logo from "%components/Logo";
import MenuSignifierButton from "%components/MenuSignifierButton";
import { NavigationContext } from "%contexts/Navigation/context";

import styles from "./styles.module.scss";
import { ScrollDirection } from "%contexts/Navigation/types";

type MenuProps = {
  backButton?: React.ReactNode;
};

const Menu = ({ backButton }: MenuProps): JSX.Element => {
  const { state: navigationState } = useContext(NavigationContext);

  return (
    <div
      className={classNames({
        [styles.Menu]: true,
        [styles.isVisible]:
          navigationState.scrollAtTop ||
          navigationState.menuIsVisible ||
          navigationState.scrollDirection === ScrollDirection.DOWN,
      })}
    >
      <div className={styles.back}>{backButton}</div>

      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.signifier} aria-label="Menu">
        <MenuSignifierButton />
      </div>
    </div>
  );
};

export default Menu;
