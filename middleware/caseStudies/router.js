const router = require('../router');

router
  .add({
    name: 'Portfolio',
    pattern: '/portfolio',
    page: 'portfolio',
  })

  .add({
    name: 'CaseStudy',
    pattern: '/portfolio/:caseStudySlug',
    page: 'caseStudy',
  });
