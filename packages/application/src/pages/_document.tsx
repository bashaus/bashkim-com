import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export type DocumentProps = {
  styledComponents: React.ReactNode;
};

class Document extends NextDocument<DocumentProps> {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styledComponents: sheet.getStyleElement(),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta key="Document.charSet" charSet="utf-8" />
          <meta key="Document.robots" name="robots" content="INDEX,FOLLOW" />
          <meta
            key="Document.opengraph.site_name"
            property="og:site_name"
            content="Bashkim Isai - Creative Technologist"
          />

          <meta
            key="Document.twitter.card"
            name="twitter:card"
            content="summary"
          />
          <meta
            key="Document.twitter.site"
            name="twitter:site"
            content="@bashaus"
          />
          <meta
            key="Document.twitter.creator"
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

          {this.props.styledComponents}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
