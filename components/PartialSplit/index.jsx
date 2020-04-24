import PropTypes from 'prop-types';
import React from 'react';

import PartialSplitItem from '%components/PartialSplit.Item';

import styles from './styles.module.scss';

const PartialSplit = ({ children, index }) => {
  const className = [
    styles.PartialSplit,
    index % 2 === 1 ? styles.odd : styles.even,
  ].join(' ');

  return (
    <div className={className}>
      {children}
    </div>
  );
};

PartialSplit.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node,
};

PartialSplit.defaultProps = {
  index: 0,
  children: null,
};

PartialSplit.Item = PartialSplitItem;

export default PartialSplit;
