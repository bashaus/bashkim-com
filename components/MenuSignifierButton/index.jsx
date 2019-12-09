import React from 'react';

import { NavigationContext } from '%contexts/Navigation';
import * as NavigationActions from '%contexts/Navigation/actions';

import styles from './styles.scss';

export default class MenuSignifierButton extends React.PureComponent {
  handleSignifierClick = () => {
    const { dispatch } = this.context;
    dispatch({ type: NavigationActions.TOGGLE });
  }

  render() {
    const { state: menuState } = this.context;

    return (
      <button
        type="button"
        aria-hidden="true"
        aria-pressed={menuState.isVisible}
        onClick={this.handleSignifierClick}
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
  }
}

MenuSignifierButton.contextType = NavigationContext;
