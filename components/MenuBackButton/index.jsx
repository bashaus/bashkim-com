import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const MenuBackButton = ({ children }) => (
  <span className={`${styles.MenuBackButton}`}>
    { children }
  </span>
);

MenuBackButton.propTypes = {
  children: PropTypes.node,
};

MenuBackButton.defaultProps = {
  children: null,
};

export default MenuBackButton;
