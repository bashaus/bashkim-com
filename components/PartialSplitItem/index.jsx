import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export default function PartialSplitItem(props) {
  const { backgroundImage, children } = props;

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
}

PartialSplitItem.propTypes = {
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
};

PartialSplitItem.defaultProps = {
  backgroundImage: null,
  children: null,
};
