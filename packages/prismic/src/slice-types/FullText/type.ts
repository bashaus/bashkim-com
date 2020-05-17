import RichTextPrismicType, {
  RichTextTypePrismicItemType,
} from "%types/rich-text";
import SliceType from "%types/slice";

interface FullTextSliceType extends SliceType {
  items?: Array<{}>;
  primary: {
    FullTextSliceType_Body: RichTextPrismicType<RichTextTypePrismicItemType>;
  };
}

export default FullTextSliceType;
