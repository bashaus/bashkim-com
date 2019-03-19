import PropTypes from 'prop-types';

import ImagePrismicPropType from '%prismic/prop-types/image';
import RichTextPrismicPropType from '%prismic/prop-types/rich-text';
import SlicePropType from '%prismic/prop-types/slice';

export default PropTypes.shape({
  ...SlicePropType,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      CaptionedScreenshotsSliceType_Images: ImagePrismicPropType,
    }),
  ).isRequired,
  primary: PropTypes.shape({
    CaptionedScreenshotsSliceType_Caption: RichTextPrismicPropType([
      'paragraph', 'heading3',
      'strong', 'em', 'hyperlink',
      'list-item', 'o-list-item', 'o-list-item',
    ]),
  }).isRequired,
});
