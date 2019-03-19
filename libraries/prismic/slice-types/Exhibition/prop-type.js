import PropTypes from 'prop-types';

import LinkPrismicPropType from '%prismic/prop-types/link';
import RichTextPrismicPropType from '%prismic/prop-types/rich-text';
import SlicePropType from '%prismic/prop-types/slice';

export default PropTypes.shape({
  ...SlicePropType,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  primary: PropTypes.shape({
    ExhibitionSliceType_Name: RichTextPrismicPropType([
      'heading3',
    ]),
    ExhibitionSliceType_Link: LinkPrismicPropType,
    ExhibitionSliceType_OpeningDate: PropTypes.string,
    ExhibitionSliceType_ClosingDate: PropTypes.string,
    ExhibitionSliceType_Location: RichTextPrismicPropType([
      'paragraph',
    ]),
  }).isRequired,
});
