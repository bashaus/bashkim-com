import PropTypes from 'prop-types';

import AccoladesTabPropType from './tabs/accolades/prop-type';
import CollaboratorsTabPropType from './tabs/collaborators/prop-type';
import ExhibitionsTabPropType from './tabs/exhibitions/prop-type';
import ImagesTabPropType from './tabs/images/prop-type';
import InfoTabPropType from './tabs/info/prop-type';
import PageTabPropType from './tabs/page/prop-type';
import SeoTabPropType from './tabs/seo/prop-type';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  first_publication_date: PropTypes.string.isRequired,
  last_publication_date: PropTypes.string.isRequired,
  slugs: PropTypes.arrayOf(PropTypes.string),
  linked_documents: PropTypes.array,
  lang: PropTypes.string.isRequired,
  alternate_languages: PropTypes.array.isRequired,
  data: PropTypes.shape({
    ...AccoladesTabPropType,
    ...CollaboratorsTabPropType,
    ...ExhibitionsTabPropType,
    ...ImagesTabPropType,
    ...InfoTabPropType,
    ...PageTabPropType,
    ...SeoTabPropType,
  }),
});
