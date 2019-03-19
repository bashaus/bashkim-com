import PropTypes from 'prop-types';

import DocumentLinkPrismicPropType from '%prismic/prop-types/document-link';
import SlicePropType from '%prismic/prop-types/slice';

export default PropTypes.shape({
  ...SlicePropType,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  primary: PropTypes.shape({
    CollaboratorSliceType_Peer: DocumentLinkPrismicPropType(
      PropTypes.shape({
        peer_name: PropTypes.string,
      }),
    ),
    CollaboratorSliceType_Company: PropTypes.string,
    CollaboratorSliceType_Role: PropTypes.string,
  }).isRequired,
});
