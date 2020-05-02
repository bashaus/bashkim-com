import RichTextPrismicType, { RichTextTypePrismicItemType } from '%prismic/types/rich-text';
import SliceType from '%prismic/types/slice';

interface FullTextSliceType extends SliceType {
  items?: Array<{}>;
  primary: {
    FullTextSliceType_Body: RichTextPrismicType<RichTextTypePrismicItemType>;
  };
}

export default FullTextSliceType;
