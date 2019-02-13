import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as GuiActions from 'store/actions/gui';

import styles from './styles.scss';

export class HeaderIntersectionDisconnected extends React.PureComponent {
  constructor(...args) {
    super(...args);

    if (typeof IntersectionObserver !== 'undefined') {
      this.intersectionObserver = new IntersectionObserver(
        this.processIntersectionEntries.bind(this),
      );
    }

    this.ref = React.createRef();
  }

  componentDidMount() {
    if (this.intersectionObserver && this.ref.current) {
      this.intersectionObserver.observe(this.ref.current);
    }
  }

  componentWillUnmount() {
    if (this.intersectionObserver && this.ref.current) {
      this.intersectionObserver.unobserve(this.ref.current);
    }
  }

  processIntersectionEntries(entries) {
    const { doUpdate } = this.props;
    entries.forEach(entry => doUpdate(entry.isIntersecting));
  }

  render() {
    return (
      <div ref={this.ref} className={styles.Intersection} />
    );
  }
}

HeaderIntersectionDisconnected.propTypes = {
  /* mapDispatchToProps */
  doUpdate: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    doUpdate: GuiActions.doUpdateHeaderIntersection,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(HeaderIntersectionDisconnected);
