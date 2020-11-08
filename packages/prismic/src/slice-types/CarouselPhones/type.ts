import RichTextPrismicType from "%types/rich-text";
import ImagePrismicType from "%types/image";
import SliceType from "%types/slice";

interface CaptionedPhonesSliceType extends SliceType {
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
}

export default CaptionedPhonesSliceType;
