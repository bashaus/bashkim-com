import getConfig from 'next/config';
import React from 'react';

import LinkResolver from '%prismic/helpers/LinkResolver';

const { publicRuntimeConfig } = getConfig();

export default class PrismicConnectPage extends React.PureComponent {
  static async getInitialProps({ req, res, query }) {
    const { token } = query;

    const Prismic = await import('prismic-javascript');
    const api = await Prismic.getApi(publicRuntimeConfig.prismic.apiEndpoint, { req });
    const url = await api.previewSession(token, LinkResolver, '/');

    const { default: Cookies } = await import('cookies');
    const cookies = new Cookies(req, res);
    cookies.set(Prismic.previewCookie, token, {
      maxAge: publicRuntimeConfig.prismic.preview.maxAge * 60000,
      path: '/',
      httpOnly: false,
    });

    res.redirect(302, url);
  }

  render() {
    return <p>Connecting to Prismic</p>;
  }
}
