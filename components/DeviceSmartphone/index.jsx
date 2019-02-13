import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

export default function DeviceSmartphone(props) {
  const { children, image } = props;
  return (
    <figure className={styles.DeviceSmartphone}>
      <div className={styles.wrapper}>
        <div className={`${styles.content} dragscroll`}>
          <img src={image} alt="" />
        </div>
      </div>
      <figcaption>
        <p>{ children }</p>
      </figcaption>
    </figure>
  );
}

DeviceSmartphone.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};
