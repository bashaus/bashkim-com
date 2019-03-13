import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

export default function PartialNewspaperColumns(props) {
  const { children } = props;

  return (
    <ol className={styles.PartialNewspaperColumns}>
      { children }
    </ol>
  );
}

PartialNewspaperColumns.propTypes = {
  children: PropTypes.node.isRequired,
};
