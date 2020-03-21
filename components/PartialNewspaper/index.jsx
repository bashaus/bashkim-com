import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

export default function PartialNewspaper(props) {
  const { children } = props;

  return (
    <div className={styles.PartialNewspaper}>
      { children }
    </div>
  );
}

PartialNewspaper.propTypes = {
  children: PropTypes.node.isRequired,
};
