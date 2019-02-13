import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

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
