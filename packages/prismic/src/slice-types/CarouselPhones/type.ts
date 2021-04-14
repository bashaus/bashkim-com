import type RichTextPrismicType from "@bashkim-com/prismic/types/rich-text";
import type ImagePrismicType from "@bashkim-com/prismic/types/image";
import type SliceType from "@bashkim-com/prismic/types/slice";

type CaptionedPhonesSliceType = SliceType & {
  items: Array<{
    carousel_phones_slice_type_caption: RichTextPrismicType<
      | "paragraph"
      | "heading3"
      | "strong"
      | "em"
      | "hyperlink"
      | "list-item"
      | "o-list-item"
      | "o-list-item"
    >;
    carousel_phones_slice_type_device_type: "SMARTPHONE" | "FEATURE_PHONE";
    carousel_phones_slice_type_image: ImagePrismicType;
  }>;
};

export default CaptionedPhonesSliceType;
