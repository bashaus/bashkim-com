import { useCallback, useContext } from "react";

import { NavigationContext } from "%contexts/Navigation/context";
import { NavigationActionsTypes } from "%contexts/Navigation/actions";

import styles from "./styles.module.scss";

const MenuSignifierButton = (): JSX.Element => {
  const { state: navigationState, dispatch: navigationDispatch } = useContext(
    NavigationContext
  );

  const handleSignifierClick = useCallback((): void => {
    navigationDispatch({ type: NavigationActionsTypes.MENU_TOGGLE });
  }, [navigationDispatch]);

  return (
    <button
      type="button"
      aria-hidden="true"
      aria-pressed={navigationState.menuIsVisible}
      onClick={handleSignifierClick}
      className={styles.MenuSignifierButton}
    >
      <span className={styles.icon}>
        <span />
        <span />
        <span />
        <span />
      </span>
    </button>
  );
};

export default MenuSignifierButton;
