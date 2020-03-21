import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

export default function PartialSplit(props) {
  const { children, index } = props;
  const className = [
    styles.PartialSplit,
    index % 2 === 1 ? styles.odd : styles.even,
  ].join(' ');

  return (
    <div className={className}>
      {children}
    </div>
  );
}

PartialSplit.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node,
};

PartialSplit.defaultProps = {
  index: 0,
  children: null,
};

function PartialSplitItem(props) {
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

PartialSplit.Item = PartialSplitItem;
