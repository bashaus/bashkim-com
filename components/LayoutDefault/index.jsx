import PropTypes from 'prop-types';
import React from 'react';

import '%styleguide/main.scss';

import CookiesNotice from '%components/CookiesNotice';
import Page from '%components/Page';
import CookiesProvider from '%contexts/Cookies';
import NavigationProvider from '%contexts/Navigation';

export default function LayoutDefault(props) {
  const {
    backButton, children, theme,
  } = props;

  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
  }

  if (typeof window !== 'undefined') {
    window.requestAnimationFrame(() => {
      document.documentElement.classList.add('ready');
    });
  }

  return (
    <>
      <CookiesProvider>
        <CookiesNotice />
      </CookiesProvider>

      <NavigationProvider>
        <Page backButton={backButton} theme={theme}>
          { children }
        </Page>
      </NavigationProvider>
    </>
  );
}

LayoutDefault.propTypes = {
  backButton: PropTypes.node,
  children: PropTypes.node,
  theme: PropTypes.string,
};

LayoutDefault.defaultProps = {
  backButton: null,
  children: null,
  theme: 'default',
};
