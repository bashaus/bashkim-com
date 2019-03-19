require('dotenv').config()

const Sentry = require('@sentry/node');
const express = require('express');
const next = require('next');

const Config = require('./config');
const Router = require('./middleware/router');
const SeoRouter = require('./middleware/seo/router');
const SitemapRouter = require('./middleware/sitemaps/router');

require('./middleware/pages/router');
require('./middleware/caseStudies/router');

const sentryIsEnabled = Config.get('sentry.enabled');
if (sentryIsEnabled) {
  Sentry.init({
    dsn: Config.get('sentry.dsn'),
    environment: Config.get('sentry.environment'),
    release: `${Config.get('sentry.project')}@${Config.get('sentry.commit')}`,
  });
}

const port = Config.get('server.port');
const dev = Config.get('next.dev');
const app = next({ dev });

const createServer = () => {
  const server = express();
  server.use(Sentry.Handlers.requestHandler());
  server.use(SeoRouter);
  server.use(SitemapRouter);
  server.use(Router.getRequestHandler(app));
  server.use(Sentry.Handlers.errorHandler());
  return server;
};

const server = createServer();

if (Config.get('server.lambda')) {
  console.log('Application started in lambda mode');
} else {
  console.log('Application started in server mode');

  app.prepare().then(() => {
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Ready on http://0.0.0.0:${port}`);
    });
  });
}

exports.app = app;
exports.server = server;
