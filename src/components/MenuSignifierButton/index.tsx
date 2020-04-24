import React, { useContext } from 'react';

import { NavigationContext } from '%contexts/Navigation';
import * as NavigationActions from '%contexts/Navigation/actions';

import styles from './styles.module.scss';

const MenuSignifierButton = (): JSX.Element => {
  const { state: navigationState, dispatch: navigationDispatch } = useContext(
    NavigationContext,
  );

  const handleSignifierClick = (): void => {
    navigationDispatch({ type: NavigationActions.TOGGLE });
  };

  return (
    <button
      type="button"
      aria-hidden="true"
      aria-pressed={navigationState.isVisible}
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
