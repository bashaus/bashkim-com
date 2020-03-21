import VisibilitySensor from 'react-visibility-sensor';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

export default class DeferredAsset extends React.PureComponent {
  constructor(...args) {
    super(...args);

    this.state = {
      visible: false,
    };
  }

  handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ visible: true });
    }
  }

  render() {
    const {
      children,
      width,
      height,
      ratio,
    } = this.props;
    const { visible } = this.state;

    if (visible) {
      return children;
    }

    const ratioValue = ratio || (height / width);
    const style = { paddingBottom: `${ratioValue * 100}%` };

    if (width) {
      style.maxWidth = width;
    }

    return (
      <VisibilitySensor
        partialVisibility
        onChange={this.handleVisibilityChange}
      >
        <div className={styles.DeferredAsset} style={style} />
      </VisibilitySensor>
    );
  }
}

DeferredAsset.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  ratio: PropTypes.number,
};

DeferredAsset.defaultProps = {
  width: null,
  height: null,
  ratio: null,
};
