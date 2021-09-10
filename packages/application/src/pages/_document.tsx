import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta key="MyDocument.charSet" charSet="utf-8" />
          <meta key="MyDocument.robots" name="robots" content="INDEX,FOLLOW" />
          <meta
            key="MyDocument.opengraph.site_name"
            property="og:site_name"
            content="Bashkim Isai - Creative Technologist"
          />

          <meta
            key="MyDocument.twitter.card"
            name="twitter:card"
            content="summary"
          />
          <meta
            key="MyDocument.twitter.site"
            name="twitter:site"
            content="@bashaus"
          />
          <meta
            key="MyDocument.twitter.creator"
            name="twitter:creator"
            content="@bashaus"
          />

          {/*
            <link rel="apple-touch-icon" href="/static/images/favicons/touch-icon-iphone.png" />
            <link rel="apple-touch-icon" sizes="76x76"
              href="/static/images/favicons/touch-icon-ipad.png" />
            <link rel="apple-touch-icon" sizes="120x120"
              href="/static/images/favicons/touch-icon-iphone-retina.png" />
            <link rel="apple-touch-icon" sizes="152x152"
              href="/static/images/favicons/touch-icon-ipad-retina.png" />
            <link rel="apple-touch-startup-image" href="/static/images/favicons/startup.png" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="msapplication-TileImage" content="/static/images/favicons/144.png" />
            <link rel="icon" sizes="192x192" href="/static/images/favicons/192.png" />
          */}

          <meta name="theme-color" content="#29E5D0" />
          <meta name="msapplication-TileColor" content="#29E5D0" />

          {/* These are now on a per-page basis
            <meta property="og:type" content={ appConfig.meta.type } />
            <meta property="og:url" content={ destinationPath } />
            <meta name="twitter:url" content={ destinationPath } />
          */}
        </Head>
        <body>
          <div className="peep--site">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
