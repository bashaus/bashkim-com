const nextRoutes = require('next-routes');

const routes = nextRoutes()

  .add({
    name: 'about',
    pattern: '/about/?',
    page: 'about',
  })

  .add({
    name: 'blog',
    pattern: '/blog/?',
    page: 'blog',
  })

  .add({
    name: 'CookiePolicy',
    pattern: '/legal/cookie-policy/?',
    page: 'legal/cookie-policy',
  })

  .add({
    name: 'index',
    pattern: '/?',
    page: 'index',
  });

module.exports = routes;
