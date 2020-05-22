import React from "react";

import GoogleAnalytics from "%components/GoogleAnalytics";
import CookiesNotice from "%components/CookiesNotice";
import Page from "%components/Page";
import CookiesProvider from "%contexts/Cookies";
import NavigationStore from "%contexts/Navigation";

interface LayoutDefaultProps {
  backButton?: React.ReactNode;
  children?: React.ReactNode;
  theme?: string;
}

const LayoutDefault = ({
  backButton,
  children,
  theme = "default",
}: LayoutDefaultProps): JSX.Element => {
  const handleDocumentReady = (): void => {
    document.documentElement.classList.add("ready");
  };

  if (typeof window !== typeof undefined) {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(handleDocumentReady);
    } else {
      setTimeout(handleDocumentReady, 1);
    }
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

      <GoogleAnalytics />
    </>
  );
};

export default LayoutDefault;
