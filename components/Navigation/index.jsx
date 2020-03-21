import PropTypes from 'prop-types';
import React from 'react';

import NavigationPrimary from '%components/NavigationPrimary';
import NavigationSocial from '%components/NavigationSocial';
import { NavigationContext } from '%contexts/Navigation';

import styles from './styles.module.scss';

export default function Navigation(props) {
  const { theme } = props;
  const { state: navigationState } = React.useContext(NavigationContext);

  return (
    <div
      className={`
        ${styles.Navigation}
        ${navigationState.atTop ? styles.atTop : ''}
      `}
    >
      <NavigationPrimary theme={theme} />
      <NavigationSocial />
    </div>
  );
}

Navigation.propTypes = {
  theme: PropTypes.string.isRequired,
};
