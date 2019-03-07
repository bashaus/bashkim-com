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
    gtag('config', '${publicRuntimeConfig.googleAnalytics.ua}', { anonymize_ip: true });
  `;

  return (
    <Head>
      <link
        key="TrackingGoogleAnalytics.preconnect"
        rel="preconnect"
        href="https://www.google-analytics.com"
      />

      <script
        async
        key="TrackingGoogleAnalytics.script.extern"
        src={`https://www.googletagmanager.com/gtag/js?id=${publicRuntimeConfig.googleAnalytics.ua}`}
      />

      <script
        key="TrackingGoogleAnalytics.script.inline"
        dangerouslySetInnerHTML={{ __html: SCRIPT_GOOGLE_ANALYTICS }}
      />
    </Head>
  );
}
