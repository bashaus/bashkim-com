import { useEffect } from "react";

import { GoogleAnalytics } from "%components/GoogleAnalytics";
import { CookiesNotice } from "%components/CookiesNotice";
import { Page } from "%components/Page";

import { CookiesProvider } from "%contexts/Cookies/provider";

export type LayoutDefaultProps = {
  backButton?: React.ReactNode;
  children?: React.ReactNode;
};

export const LayoutDefault = ({
  backButton,
  children,
}: LayoutDefaultProps): JSX.Element => {
  useEffect((): void => {
    document.documentElement.classList.add("isReady");
  }, []);

  return (
    <>
      <CookiesProvider>
        <CookiesNotice />
      </CookiesProvider>
      <Page backButton={backButton}>{children}</Page>
      <GoogleAnalytics />
    </>
  );
};
