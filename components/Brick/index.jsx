import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const Brick = ({ title, icon, description }) => (
  <article className={styles.Brick}>
    <div className={styles.inner}>
      <h3>{title}</h3>

      <div className={styles.image}>
        <img alt="" src={icon} />
      </div>

      <p>
        {description}
      </p>
    </div>
  </article>
);

Brick.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Brick;
