import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

import TrackingGoogleAnalytics from '%components/TrackingGoogleAnalytics';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en" className="no-js" dir="ltr">
        {/* import "assets/content/helpers/siteHelper.html.njk" as siteHelper */}
        {/* set mime = require('mime') */}
        {/* set octicons = require('octicons') */}
        <Head>
          <meta key="MyDocument.charSet" charSet="utf-8" />
          <meta key="MyDocument.viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <meta key="MyDocument.robots" name="robots" content="INDEX,FOLLOW" />
          <meta key="MyDocument.opengraph.site_name" property="og:site_name" content="Bashkim Isai - Creative Technologist" />

          <meta key="MyDocument.twitter.card" name="twitter:card" content="summary" />
          <meta key="MyDocument.twitter.site" name="twitter:site" content="@bashaus" />
          <meta key="MyDocument.twitter.creator" name="twitter:creator" content="@bashaus" />

          { /*
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="format-detection" content="telephone=no" />
            <link rel="apple-touch-icon" href="/static/images/favicons/touch-icon-iphone.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/static/images/favicons/touch-icon-ipad.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/static/images/favicons/touch-icon-iphone-retina.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/static/images/favicons/touch-icon-ipad-retina.png" />
            <link rel="apple-touch-startup-image" href="/static/images/favicons/startup.png" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="msapplication-TileImage" content="/static/images/favicons/144.png" />
            <link rel="icon" sizes="192x192" href="/static/images/favicons/192.png" />
          */ }

          <meta name="theme-color" content="#29E5D0" />
          <meta name="msapplication-TileColor" content="#29E5D0" />

          { /* These are now on a per-page basis

            <link rel="canonical" href={ siteHelper.href(canonical if canonical else destinationPath) } />
            <meta property="og:type" content={ appConfig.meta.type } />
            <meta property="og:url" content={ siteHelper.href(destinationPath) } />
            <meta name="twitter:url" content={ siteHelper.href(destinationPath) } />

            if previous
              <link rel="prev" href="{{ siteHelper.href(previous.destinationPath) }}">

            if next
              <link rel="next" href="{{ siteHelper.href(next.destinationPath) }}">
          */}
        </Head>
        <body>
          <div className="peep--site">
            <Main />
          </div>
          <NextScript />
          <TrackingGoogleAnalytics />
        </body>
      </html>
    );
  }
}
