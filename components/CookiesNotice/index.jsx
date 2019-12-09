import React from 'react';
import AnimateHeight from 'react-animate-height';

import * as CookiesActions from '%contexts/Cookies/actions';
import { CookiesContext } from '%contexts/Cookies';

import styles from './styles.scss';

export default class CookiesNotice extends React.Component {
  constructor(...args) {
    super(...args);

    const { state: cookiesState } = this.context;

    this.state = {
      isVisible: !cookiesState.isDismissed,
    };
  }

  handleDismissClick = () => {
    const { dispatch } = this.context;
    dispatch({ type: CookiesActions.DISMISS });
  }

  handleAnimationEnd = () => {
    this.setState({ isVisible: false });
  }

  render() {
    const { state: cookiesState } = this.context;
    const { isVisible } = this.state;

    if (!isVisible) {
      return null;
    }

    return (
      <div className={styles.CookiesNotice}>
        <AnimateHeight
          duration={300}
          height={cookiesState.isDismissed ? 0 : 'auto'}
          eassing="ease-out"
          onAnimationEnd={this.handleAnimationEnd}
        >
          <div className={styles.container}>
            <div className={styles.content}>
              Even a small website like this uses cookies to give you the best
              possible browsing experience. By&nbsp;continuing, you agree to the
              {' '}
              <a href="/legal/cookie-policy/">
                Cookie&nbsp;Policy
              </a>
              .
            </div>
            <div className={styles.close}>
              <button type="button" onClick={this.handleDismissClick}>
                OK, Cool
              </button>
            </div>
          </div>
        </AnimateHeight>
      </div>
    );
  }
}

CookiesNotice.contextType = CookiesContext;
