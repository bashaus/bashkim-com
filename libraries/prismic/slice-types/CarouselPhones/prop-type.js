import PropTypes from 'prop-types';

import RichTextPrismicPropType from '%prismic/prop-types/rich-text';
import ImagePrismicPropType from '%prismic/prop-types/image';
import SlicePropType from '%prismic/prop-types/slice';

export const DeviceTypes = {
  SMARTPHONE: 'SMARTPHONE',
  FEATURE_PHONE: 'FEATURE_PHONE',
};

export default PropTypes.shape({
  ...SlicePropType,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      CarouselPhonesSliceType_Caption: RichTextPrismicPropType([
        'paragraph', 'heading3',
        'strong', 'em', 'hyperlink',
        'list-item', 'o-list-item', 'o-list-item',
      ]),
      CarouselPhonesSliceType_DeviceType: PropTypes.oneOf(
        Object.values(DeviceTypes),
      ),
      CarouselPhonesSliceType_Image: ImagePrismicPropType,
    }),
  ).isRequired,
});
