import React from 'react';

import CookiesNotice from '%components/CookiesNotice';
import Page from '%components/Page';
import CookiesProvider from '%contexts/Cookies';
import NavigationStore from '%contexts/Navigation';

interface LayoutDefaultProps {
  backButton?: React.ReactNode;
  children?: React.ReactNode;
  theme?: string;
}

const LayoutDefault = ({
  backButton,
  children,
  theme = 'default',
}: LayoutDefaultProps): JSX.Element => {
  if (typeof window !== typeof undefined) {
    window.requestAnimationFrame((): void => {
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

export default LayoutDefault;
