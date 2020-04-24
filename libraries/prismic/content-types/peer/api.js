const Prismic = require('prismic-javascript');
const api = require('../../api');

const getPeers = async (ids, params) => {
  if (ids.length === 0) {
    return [];
  }

  // We initialise the API with Prismic's kit
  const API = await api;

  // Here we just query the documents with a filter of only returning
  // the type of blog_post and order them. Full docs can be found here:
  // https://github.com/prismicio/prismic-javascript#query-the-content
  const response = await API.query(
    [
      Prismic.Predicates.at('document.type', 'peer'),
      Prismic.Predicates.in('document.id', ids),
    ],
    { ...params },
  );

  return response;
};

const getPeer = async (uid, params) => {
  const API = await api;

  // we pass up the slug to request the correct post
  const response = await API.query(
    Prismic.Predicates.at('my.peer.uid', uid),
    { ...params },
  );

  return response.results[0];
};

module.exports = { getPeers, getPeer };
