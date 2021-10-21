import getConfig from "next/config";
import Script from "next/script";

export const GoogleAnalytics = (): JSX.Element => {
  const { publicRuntimeConfig: config } = getConfig();

  if (!config.googleAnalytics.enabled) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics.ua}`}
      />
      <Script id="GoogleAnalytics.dataLayer">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.googleAnalytics.ua}');
        `}
      </Script>
    </>
  );
};
