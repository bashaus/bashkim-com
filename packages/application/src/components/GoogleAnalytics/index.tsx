import { useMemo } from "react";

import getConfig from "next/config";
import Head from "next/head";

export const GoogleAnalytics = (): JSX.Element => {
  const { publicRuntimeConfig: config } = getConfig();

  const GA_SCRIPT = useMemo(
    () => ({
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${config.googleAnalytics.ua}');
      `,
    }),
    [config.googleAnalytics.ua]
  );

  if (!config.googleAnalytics.enabled) {
    return null;
  }

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
