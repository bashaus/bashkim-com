import PropTypes from 'prop-types';

import EmbedPrismicPropType from '%prismic/prop-types/embed';
import SlicePropType from '%prismic/prop-types/slice';

export default PropTypes.shape({
  ...SlicePropType,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      GridEmbedSliceType_Embed: EmbedPrismicPropType,
    }),
  ).isRequired,
  primary: PropTypes.shape({
  }),
});
