import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.scss';

const PartialSplitItem = ({ backgroundImage, children }) => {
  const style = {};
  const className = [styles.PartialSplitItem];

  if (backgroundImage) {
    style.backgroundImage = `url("${backgroundImage}")`;
    className.push(styles.background);
    className.push('PartialSplit_chevron');
  } else {
    className.push(styles.foreground);
  }

  return (
    <div className={className.join(' ')} style={style}>
      {children}
    </div>
  );
};

PartialSplitItem.propTypes = {
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
};

PartialSplitItem.defaultProps = {
  backgroundImage: null,
  children: null,
};

export default PartialSplitItem;
