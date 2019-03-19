import PropTypes from 'prop-types';

import DocumentLinkPrismicPropType from '%prismic/prop-types/document-link';
import ImagePrismicPropType from '%prismic/prop-types/image';
import LinkPrismicPropType from '%prismic/prop-types/link';

export default {
  info_brief: PropTypes.string.isRequired,
  info_strategy: PropTypes.string.isRequired,
  info_implementation: PropTypes.string.isRequired,
  info_deliverables: PropTypes.arrayOf(
    PropTypes.shape({
      info_deliverable_name: PropTypes.string,
      info_deliverable_link: LinkPrismicPropType,
    }),
  ),
  info_client: PropTypes.string,
  info_agency: PropTypes.string,
  info_role: PropTypes.string,
  info_institution: PropTypes.string,
  info_degree: PropTypes.string,
  info_launch_date: PropTypes.string.isRequired,
  info_decommission_date: PropTypes.string,
  info_target_audiences: PropTypes.arrayOf(
    PropTypes.shape({
      info_target_audience_name: PropTypes.string,
    }),
  ),
  info_markets: PropTypes.arrayOf(
    PropTypes.shape({
      info_market: PropTypes.string,
    }),
  ),
  info_outcomes: PropTypes.arrayOf(
    PropTypes.shape({
      info_outcome: PropTypes.string,
    }),
  ),
  info_technologies: PropTypes.arrayOf(
    PropTypes.shape({
      info_technology: DocumentLinkPrismicPropType(
        PropTypes.shape({
          technology_name: PropTypes.string,
          technology_icon: ImagePrismicPropType,
        }),
      ),
    }),
  ),
};
