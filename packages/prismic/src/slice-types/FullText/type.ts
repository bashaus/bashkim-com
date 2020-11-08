import RichTextPrismicType, {
  RichTextTypePrismicItemType,
} from "%types/rich-text";
import SliceType from "%types/slice";

interface FullTextSliceType extends SliceType {
  items?: Array<{}>;
  primary: {
    full_text_slice_type_body: RichTextPrismicType<RichTextTypePrismicItemType>;
  };
}

export default FullTextSliceType;
