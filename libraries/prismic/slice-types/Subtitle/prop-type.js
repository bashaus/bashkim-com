import PropTypes from 'prop-types';

import RichTextPrismicPropType from '%prismic/prop-types/rich-text';
import SlicePropType from '%prismic/prop-types/slice';

export default PropTypes.shape({
  ...SlicePropType,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  primary: PropTypes.shape({
    SubtitleSliceType_Heading: RichTextPrismicPropType([
      'heading2',
    ]),
    SubtitleSliceType_Description: RichTextPrismicPropType([
      'paragraph',
    ]),
  }).isRequired,
});
