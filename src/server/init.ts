import * as Sentry from '@sentry/node';
import express from 'express';
import next from 'next';

import Config from '../config';

import Router from '../middleware/router';
import SeoRouter from '../middleware/seo/router';
import SitemapRouter from '../middleware/sitemaps/router';

const sentryIsEnabled = Config.get('sentry.enabled');
if (sentryIsEnabled) {
  Sentry.init({
    dsn: Config.get('sentry.dsn'),
    environment: Config.get('sentry.environment'),
    release: `${Config.get('sentry.project')}#${Config.get('sentry.commit')}`,
  });
}

const port = Config.get('server.port');

export const app = next(Config.get('next'));
export const server = express();

server.use(Sentry.Handlers.requestHandler());
server.use(SeoRouter);
server.use(SitemapRouter);
server.use(Router.getRequestHandler(app));
server.use(Sentry.Handlers.errorHandler());

if (Config.get('server.lambda')) {
  console.log('Application started in lambda mode');
} else {
  console.log('Application started in server mode');

  app.prepare().then(() => {
    server.listen(port, (err: Error) => {
      if (err) throw err;
      console.log(`Ready on http://0.0.0.0:${port}`);
    });
  });
}
