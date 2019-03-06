import getConfig from 'next/config';
import Head from 'next/head';
import React from 'react';

const { publicRuntimeConfig } = getConfig();
export default function TrackingGoogleAnalytics() {
  if (!publicRuntimeConfig.googleAnalytics.enabled) {
    return null;
  }

  const SCRIPT_GOOGLE_ANALYTICS = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${publicRuntimeConfig.googleAnalytics.ua}', { 'anonymize_ip': true });
  `;

  return (
    <Head>
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${publicRuntimeConfig.googleAnalytics.ua}`} />
      { /* eslint-disable-next-line react/no-danger */ }
      <script dangerouslySetInnerHTML={{ __html: SCRIPT_GOOGLE_ANALYTICS }} />
    </Head>
  );
}
