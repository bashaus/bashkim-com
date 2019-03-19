import PropTypes from 'prop-types';

export default {
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  meta_keywords: PropTypes.string,
  sitemap_changefreq: PropTypes.oneOf([
    'always',
    'hourly',
    'daily',
    'weekly',
    'monthly',
    'yearly',
    'never',
  ]),
  sitemap_priority: PropTypes.oneOf([
    '0.1',
    '0.2',
    '0.3',
    '0.4',
    '0.5',
    '0.6',
    '0.7',
    '0.8',
    '0.9',
    '1.0',
  ]),
};
