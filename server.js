const Sentry = require('@sentry/node');
const express = require('express');
const next = require('next');
const nextRoutes = require('next-routes');

const config = require('./config');
const RedirectsRouter = require('./middleware/redirects/router');
const SitemapRouter = require('./middleware/sitemaps/router');

require('./middleware/pages/router');
require('./middleware/caseStudies/router');

const sentryIsEnabled = config.get('sentry.enabled');
if (sentryIsEnabled) {
  Sentry.init({
    dsn: config.get('sentry.dsn'),
    environment: config.get('sentry.environment'),
    release: `${config.get('sentry.project')}@${config.get('sentry.commit')}`,
  });
}

const port = config.get('server.port');
const dev = config.get('next.dev');
const app = next({ dev });

const createServer = () => {
  const server = express();
  server.use(Sentry.Handlers.requestHandler());
  server.use(RedirectsRouter);
  server.use(SitemapRouter);
  server.use(nextRoutes().getRequestHandler(app));
  server.use(Sentry.Handlers.errorHandler());
  return server;
};

const server = createServer();

if (config.get('server.lambda')) {
  console.log('Application started in lambda mode');
} else {
  console.log('Application started in server mode');

  app.prepare().then(() => {
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Ready on http://localhost:${port}`);
    });
  });
}

exports.app = app;
exports.server = server;
