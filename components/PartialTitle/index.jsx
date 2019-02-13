import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export default function PartialTitle(props) {
  const { title, children, image } = props;

  return (
    <header className={styles.PartialTitle}>
      <h1 itemProp="name headline">{title}</h1>
      <div itemProp="description">{children}</div>
      {image && (
        <img src={image} alt="" />
      )}
    </header>
  );
}

PartialTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  image: PropTypes.string,
};

PartialTitle.defaultProps = {
  children: null,
  image: null,
};
