import PropTypes from 'prop-types';

import RichTextPrismicPropType from '%prismic/prop-types/rich-text';
import SlicePropType from '%prismic/prop-types/slice';

export default PropTypes.shape({
  ...SlicePropType,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  primary: PropTypes.shape({
    FullTextSliceType_Body: RichTextPrismicPropType([
      'paragraph', 'preformatted',
      'heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6',
      'strong', 'em', 'hyperlink', 'image', 'embed',
      'list-item', 'o-list-item', 'o-list-item',
    ]),
  }).isRequired,
});
