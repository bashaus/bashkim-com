import PropTypes from 'prop-types';

import PageTabPropType from './tabs/page/prop-type';
import SeoTabPropType from './tabs/seo/prop-type';

export default PropTypes.shape({
  id: PropTypes.string,
  uid: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  first_publication_date: PropTypes.string,
  last_publication_date: PropTypes.string,
  slugs: PropTypes.arrayOf(PropTypes.string),
  linked_documents: PropTypes.array,
  lang: PropTypes.string,
  alternate_languages: PropTypes.array,
  data: PropTypes.shape({
    ...PageTabPropType,
    ...SeoTabPropType,
  }),
});
