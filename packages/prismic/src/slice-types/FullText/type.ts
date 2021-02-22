import RichTextPrismicType, {
  RichTextTypePrismicItemType,
} from "@bashkim-com/prismic/types/rich-text";
import SliceType from "@bashkim-com/prismic/types/slice";

type FullTextSliceType = SliceType & {
  items?: Array<{}>;
  primary: {
    full_text_slice_type_body: RichTextPrismicType<RichTextTypePrismicItemType>;
  };
};

export default FullTextSliceType;
