import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

export default function PartialNewspaper(props) {
  const { children } = props;

  return (
    <ol className={styles.PartialNewspaper}>
      { children }
    </ol>
  );
}

PartialNewspaper.propTypes = {
  children: PropTypes.node.isRequired,
};
