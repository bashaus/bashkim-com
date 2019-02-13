import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as GuiActions from 'store/actions/gui';

import styles from './styles.scss';

export class MenuSignifierButtonDisconnected extends React.PureComponent {
  constructor(...args) {
    super(...args);

    this.handleSignifierClick = this.handleSignifierClick.bind(this);
  }

  handleSignifierClick(e) {
    const { doMenuToggle } = this.props;
    doMenuToggle(e);
  }

  render() {
    const { menuIsVisible } = this.props;

    return (
      <button
        type="button"
        aria-hidden="true"
        aria-pressed={menuIsVisible}
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

MenuSignifierButtonDisconnected.propTypes = {
  /* mapStateToProps */
  menuIsVisible: PropTypes.bool.isRequired,

  /* mapDispatchToProps */
  doMenuToggle: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    menuIsVisible: state.gui.menuIsVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    doMenuToggle: GuiActions.toggleMenu,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuSignifierButtonDisconnected);
