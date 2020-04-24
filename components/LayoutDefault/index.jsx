import PropTypes from 'prop-types';
import React from 'react';

import CookiesNotice from '%components/CookiesNotice';
import Page from '%components/Page';
import CookiesProvider from '%contexts/Cookies';
import NavigationStore from '%contexts/Navigation';

const LayoutDefault = ({ backButton, children, theme }) => {
  if (typeof document !== typeof undefined) {
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
  }

  if (typeof window !== typeof undefined) {
    window.requestAnimationFrame(() => {
      document.documentElement.classList.add('ready');
    });
  }

  return (
    <>
      <CookiesProvider>
        <CookiesNotice />
      </CookiesProvider>

      <NavigationStore>
        <Page backButton={backButton} theme={theme}>
          {children}
        </Page>
      </NavigationStore>
    </>
  );
};

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

export default LayoutDefault;
