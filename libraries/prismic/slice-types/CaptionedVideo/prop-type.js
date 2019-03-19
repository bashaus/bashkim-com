import PropTypes from 'prop-types';

import EmbedPrismicPropType from '%prismic/prop-types/embed';
import RichTextPrismicPropType from '%prismic/prop-types/rich-text';
import SlicePropType from '%prismic/prop-types/slice';

export default PropTypes.shape({
  ...SlicePropType,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  primary: PropTypes.shape({
    CaptionedVideoSliceType_Caption: RichTextPrismicPropType([
      'paragraph', 'heading3',
      'strong', 'em', 'hyperlink',
      'list-item', 'o-list-item', 'o-list-item',
    ]),
    CaptionedVideoSliceType_Video: EmbedPrismicPropType.isRequired,
  }).isRequired,
});
