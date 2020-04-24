import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

import styles from './styles.module.scss';

const DeferredAsset = ({ children, width, height, ratio }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = _isVisible => {
    if (!isVisible && _isVisible) {
      setIsVisible(true);
    }
  };

  if (isVisible) {
    return children;
  }

  const ratioValue = ratio || (height / width);
  const style = {
    paddingBottom: `${ratioValue * 100}%`
  };

  if (width) {
    style.maxWidth = width;
  }

  return (
    <VisibilitySensor partialVisibility onChange={handleVisibilityChange}>
      <div className={styles.DeferredAsset} style={style} />
    </VisibilitySensor>
  );
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

export default DeferredAsset;
