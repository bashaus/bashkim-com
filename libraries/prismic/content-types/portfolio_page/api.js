const Prismic = require('prismic-javascript');
const api = require('../../api');

async function getPortfolioPage(params) {
  const API = await api;

  // we pass up the slug to request the correct post
  const response = await API.query(
    Prismic.Predicates.at('document.type', 'portfolio_page'),
    {
      fetchLinks: [
        'case_study.meta_title',
        'case_study.meta_description',
        'case_study.image_icon',
        'case_study.image_poster',
        // 'case_study.uid',
      ],
      ...params,
    },
  );

  return response.results[0];
}

module.exports = { getPortfolioPage };
