import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

export default function MenuBackButton(props) {
  const { children } = props;

  return (
    <span className={`${styles.MenuBackButton}`}>
      { children }
    </span>
  );
}

MenuBackButton.propTypes = {
  children: PropTypes.node,
};

MenuBackButton.defaultProps = {
  children: null,
};
