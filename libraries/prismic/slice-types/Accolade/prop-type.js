import PropTypes from 'prop-types';

import LinkPrismicPropType from '%prismic/prop-types/link';
import RichTextPrismicPropType from '%prismic/prop-types/rich-text';
import SlicePropType from '%prismic/prop-types/slice';

export default PropTypes.shape({
  ...SlicePropType,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      AccoladeSliceType_AwardPlace: PropTypes.oneOf([
        'gold',
        'silver',
        'bronze',
        'honour',
        'shortlist',
      ]).isRequired,
      AccoladeSliceType_AwardLink: LinkPrismicPropType,
      AccoladeSliceType_AwardCategory: RichTextPrismicPropType([
        'paragraph',
      ]),
    }),
  ).isRequired,
  primary: PropTypes.shape({
    AccoladeSliceType_Issuer: RichTextPrismicPropType([
      'heading3',
    ]),
    AccoladeSliceType_Description: RichTextPrismicPropType([
      'paragraph',
    ]),
    AccoladeSliceType_Date: PropTypes.string.isRequired,
  }).isRequired,
});
