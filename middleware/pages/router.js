const router = require('../router');

router
  .add({
    name: 'About',
    pattern: '/about',
    page: 'about',
  })

  .add({
    name: 'CookiePolicy',
    pattern: '/legal/cookie-policy',
    page: 'legal/cookie-policy',
  })

  .add({
    name: 'Index',
    pattern: '/',
    page: 'index',
  });
