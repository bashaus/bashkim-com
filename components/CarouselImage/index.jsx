import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

export default function CarouselImage(props) {
  const { figure, children } = props;

  return (
    <figure className={styles.CarouselImage}>
      <div className={styles.figure}>
        {figure}
      </div>

      { children && (
        <figcaption>
          {children}
        </figcaption>
      ) }
    </figure>
  );
}

CarouselImage.propTypes = {
  figure: PropTypes.node.isRequired,
  children: PropTypes.node,
};

CarouselImage.defaultProps = {
  children: null,
};
