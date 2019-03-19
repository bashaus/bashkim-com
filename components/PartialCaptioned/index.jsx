import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

export default function PartialCaptioned(props) {
  const { children, figure } = props;

  return (
    <figure className={styles.PartialCaptioned}>
      <figcaption className={styles.caption}>
        {children}
      </figcaption>

      <div className={styles.figure}>
        {figure}
      </div>
    </figure>
  );
}

PartialCaptioned.propTypes = {
  children: PropTypes.node.isRequired,
  figure: PropTypes.node.isRequired,
};
