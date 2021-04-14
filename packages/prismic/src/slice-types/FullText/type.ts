import type RichTextPrismicType from "@bashkim-com/prismic/types/rich-text";
import type { RichTextTypePrismicItemType } from "@bashkim-com/prismic/types/rich-text";
import type SliceType from "@bashkim-com/prismic/types/slice";

type FullTextSliceType = SliceType & {
  items?: Array<unknown>;
  primary: {
    full_text_slice_type_body: RichTextPrismicType<RichTextTypePrismicItemType>;
  };
};

export default FullTextSliceType;
