import googleAnalytics from './schema/googleAnalytics.json';
import next from './schema/next.json';
import prismic from './schema/prismic.json';
import sentry from './schema/sentry.json';
import server from './schema/server.json';
import sitemap from './schema/sitemap.json';

export default {
  ...googleAnalytics,
  ...next,
  ...prismic,
  ...sentry,
  ...server,
  ...sitemap,
};
