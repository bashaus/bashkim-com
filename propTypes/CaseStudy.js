import PropTypes from 'prop-types';

import CaseStudyAccolade from './CaseStudyAccolade';

export default PropTypes.shape({
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
  }).isRequired,

  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  accolades: PropTypes.arrayOf(CaseStudyAccolade),
});
