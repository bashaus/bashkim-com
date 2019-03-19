const Prismic = require('prismic-javascript');
const api = require('../../api');

async function getCaseStudies(params) {
  // We initialise the API with Prismic's kit
  const API = await api;

  // Here we just query the documents with a filter of only returning
  // the type of blog_post and order them. Full docs can be found here:
  // https://github.com/prismicio/prismic-javascript#query-the-content
  const response = await API.query(
    Prismic.Predicates.at('document.type', 'case_study'),
    {
      fetchLinks: [
        'technology.technology_name',
        'technology.technology_icon',
      ],
      orderings: '[my.case_study.info_launch_date desc]',
      ...params,
      // params will be extra parameters we can pass through with api calls
      // such as how many documents to return
    },
  );

  return response;
}

async function getCaseStudy(uid, params) {
  const API = await api;

  // we pass up the slug to request the correct post
  const response = await API.query(
    Prismic.Predicates.at('my.case_study.uid', uid),
    {
      fetchLinks: [
        'peer.peer_name',
        'technology.technology_name',
        'technology.technology_icon',
      ],
      ...params,
    },
  );

  return response.results[0];
}

module.exports = { getCaseStudies, getCaseStudy };
