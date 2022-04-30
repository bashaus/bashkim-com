import getConfig from "next/config";
import Script from "next/script";

export const GoogleAnalytics = () => {
  const { publicRuntimeConfig: config } = getConfig();

  if (!config.googleAnalytics.enabled) {
    return null;
  }

  return (
    <>
      <Script
        async
        id="GoogleAnalytics.src"
        src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics.measurementId}`}
      />
      <Script id="GoogleAnalytics.config">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.googleAnalytics.measurementId}');
        `}
      </Script>
    </>
  );
};
