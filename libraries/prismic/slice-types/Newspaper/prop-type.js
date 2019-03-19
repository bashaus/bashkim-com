import PropTypes from 'prop-types';

import RichTextPrismicPropType from '%prismic/prop-types/rich-text';
import SlicePropType from '%prismic/prop-types/slice';

export default PropTypes.shape({
  ...SlicePropType,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      NewspaperSliceType_Group: RichTextPrismicPropType([
        'paragraph', 'heading3',
        'strong', 'em', 'hyperlink', 'image', 'embed',
        'list-item', 'o-list-item', 'o-list-item',
      ]),
    }).isRequired,
  ).isRequired,
  primary: PropTypes.shape({}),
});
