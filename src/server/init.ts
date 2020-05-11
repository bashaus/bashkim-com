import * as Sentry from "@sentry/node";
import express from "express";
import next from "next";

import config from "%config/index";

import Router from "%middleware/router";
import SeoRouter from "%middleware/seo/router";
import SitemapRouter from "%middleware/sitemaps/router";

const sentryIsEnabled = config.sentry.enabled;
if (sentryIsEnabled) {
  Sentry.init({
    dsn: config.sentry.dsn,
    environment: config.sentry.environment,
    release: `${config.sentry.project}#${config.sentry.commit}`,
  });
}

export const app = next(config.next);
export const server = express();

server.use(Sentry.Handlers.requestHandler());
server.use(SeoRouter);
server.use(SitemapRouter);
server.use(Router.getRequestHandler(app));
server.use(Sentry.Handlers.errorHandler());

if (config.server.lambda) {
  console.log("Application started in lambda mode");
} else {
  console.log("Application started in server mode");

  const { port } = config.server;
  app
    .prepare()
    .then(() =>
      server.listen(port, (err: Error) => {
        if (err) throw err;
        console.log(`Ready on http://0.0.0.0:${port}`);
      })
    )
    .catch((err) => {
      throw err;
    });
}
