import GoogleAnalytics from "%components/GoogleAnalytics";
import CookiesNotice from "%components/CookiesNotice";
import Page from "%components/Page";
import CookiesProvider from "%contexts/Cookies/provider";
import { NavigationProvider } from "%contexts/Navigation/provider";

type LayoutDefaultProps = {
  backButton?: React.ReactNode;
  children?: React.ReactNode;
  theme?: string;
};

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

      <NavigationProvider>
        <Page backButton={backButton} theme={theme}>
          {children}
        </Page>
      </NavigationProvider>

      <GoogleAnalytics />
    </>
  );
};

export default LayoutDefault;
