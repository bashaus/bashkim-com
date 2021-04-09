import getConfig from "next/config";
import Head from "next/head";

const GoogleAnalytics = (): JSX.Element => {
  const { publicRuntimeConfig: config } = getConfig();

  if (!config.googleAnalytics.enabled) {
    return null;
  }

  const GA_SCRIPT = {
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${config.googleAnalytics.ua}');
    `,
  };

  return (
    <Head>
      <script
        async
        key="GoogleAnalytics.external"
        src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics.ua}`}
      />
      <script
        key="GoogleAnalytics.internal"
        dangerouslySetInnerHTML={GA_SCRIPT}
      />
    </Head>
  );
};

export default GoogleAnalytics;
