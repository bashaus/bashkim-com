import PropTypes from 'prop-types';
import React from 'react';
import AnimateHeight from 'react-animate-height';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CookiesActions from '%actions/cookies';

import styles from './styles.scss';

export class CookiesNoticeDisconnected extends React.Component {
  constructor(...args) {
    super(...args);

    const { cookiesDismissed } = this.props;

    this.state = {
      isVisible: !cookiesDismissed,
    };
  }

  handleDismissClick = () => {
    const { doCookiesDismiss } = this.props;
    doCookiesDismiss();
  }

  handleAnimationEnd = () => {
    this.setState({ isVisible: false });
  }

  render() {
    const { cookiesDismissed } = this.props;
    const { isVisible } = this.state;

    if (!isVisible) {
      return null;
    }

    return (
      <div className={styles.CookiesNotice}>
        <AnimateHeight
          duration={300}
          height={cookiesDismissed ? 0 : 'auto'}
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
              <button type="button" onClick={this.handleDismissClick}>OK, Cool</button>
            </div>
          </div>
        </AnimateHeight>
      </div>
    );
  }
}

CookiesNoticeDisconnected.propTypes = {
  /* mapStateToProps */
  cookiesDismissed: PropTypes.bool.isRequired,

  /* mapDispatchToProps */
  doCookiesDismiss: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    cookiesDismissed: state.cookies.isDismissed,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    doCookiesDismiss: CookiesActions.dismiss,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CookiesNoticeDisconnected);
