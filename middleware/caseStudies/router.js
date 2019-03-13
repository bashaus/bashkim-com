const nextRoutes = require('next-routes');
const caseStudies = require('../../data/caseStudies');

const routes = nextRoutes()
  .add({
    name: 'Portfolio',
    pattern: '/portfolio/?',
    page: 'portfolio',
  });

Object.entries(caseStudies).forEach(([caseStudyKey, caseStudy]) => {
  routes.add({
    pattern: `/portfolio/${caseStudy.slug}/?`,
    page: `portfolio/${caseStudy.slug}`,
  });
});

module.exports = routes;
