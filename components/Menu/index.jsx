import PropTypes from 'prop-types';
import React from 'react';

import Logo from 'components/Logo';
import MenuSignifierButton from 'components/MenuSignifierButton';

import styles from './styles.scss';

export default function Menu(props) {
  const { backButton } = props;

  return (
    <div className={styles.Menu}>
      <div className={styles.back}>
        { backButton }
      </div>

      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.signifier} aria-label="Menu">
        <MenuSignifierButton />
      </div>
    </div>
  );
}

Menu.propTypes = {
  backButton: PropTypes.node,
};

Menu.defaultProps = {
  backButton: null,
};
