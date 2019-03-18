import React from 'react';
import PropTypes from 'prop-types';

import NavigationPrimary from '%components/NavigationPrimary';
import NavigationSocial from '%components/NavigationSocial';

import styles from './styles.scss';

export default function Navigation(props) {
  const { headerIsIntersecting, theme } = props;

  return (
    <div className={`${styles.navigation} ${headerIsIntersecting ? styles.intersecting : ''}`}>
      <NavigationPrimary theme={theme} headerIsIntersecting={headerIsIntersecting} />
      <NavigationSocial theme={theme} headerIsIntersecting={headerIsIntersecting} />
    </div>
  );
}

Navigation.propTypes = {
  theme: PropTypes.string.isRequired,
  headerIsIntersecting: PropTypes.bool.isRequired,
};
