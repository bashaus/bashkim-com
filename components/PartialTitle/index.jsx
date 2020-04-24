import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const PartialTitle = ({ title, children, image }) => (
  <header className={styles.PartialTitle}>
    <h1 itemProp="name headline">{title}</h1>
    <div itemProp="description">{children}</div>
    { image && (
      <img src={image} alt="" />
    ) }
  </header>
);

PartialTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  image: PropTypes.string,
};

PartialTitle.defaultProps = {
  children: null,
  image: null,
};

export default PartialTitle;
