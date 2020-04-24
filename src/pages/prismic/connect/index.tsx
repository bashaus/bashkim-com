import { NextPageContext, NextPage } from 'next';
import React from 'react';

import PrismicClient from '%prismic/client';
import LinkResolver from '%prismic/helpers/LinkResolver';

const PrismicConnectPage: NextPage = (): JSX.Element => (
  <div>Connecting to Prismic</div>
);

PrismicConnectPage.getInitialProps = async (context: NextPageContext): Promise<void> => {
  const { req, res, query } = context;
  if (!req || !res) {
    return;
  }

  const { token } = query;

  if (token) {
    try {
      const url = await PrismicClient(req).previewSession(token.toString(), LinkResolver, '/');
      res.writeHead(302, { Location: url });
      res.end();
    } catch {
      res
        .writeHead(400)
        .end('Something went wrong with the previewSession request');
    }
  } else {
    res
      .writeHead(400)
      .end('Missing token from preview request');
  }
};

export default PrismicConnectPage;
