import PropTypes from 'prop-types';

import EmbedPrismicPropType from '%prismic/prop-types/embed';
import ImagePrismicPropType from '%prismic/prop-types/image';
import RichTextPrismicPropType from '%prismic/prop-types/rich-text';
import SlicePropType from '%prismic/prop-types/slice';

export default PropTypes.shape({
  ...SlicePropType,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      GridVideoSliceType_Video: EmbedPrismicPropType,
      GridVideoSliceType_Image: ImagePrismicPropType,
      GridVideoSliceType_Description: RichTextPrismicPropType([
        'paragraph',
      ]),
    }),
  ).isRequired,
  primary: PropTypes.shape({}),
});
