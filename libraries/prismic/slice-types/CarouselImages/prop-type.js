import PropTypes from 'prop-types';

import RichTextPrismicPropType from '%prismic/prop-types/rich-text';
import ImagePrismicPropType from '%prismic/prop-types/image';
import SlicePropType from '%prismic/prop-types/slice';

export default PropTypes.shape({
  ...SlicePropType,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      CarouselImagesSliceType_Caption: RichTextPrismicPropType([
        'paragraph', 'heading3',
        'strong', 'em', 'hyperlink',
        'list-item', 'o-list-item', 'o-list-item',
      ]),
      CarouselImagesSliceType_Image: ImagePrismicPropType,
    }),
  ).isRequired,
});
