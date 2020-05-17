import RichTextPrismicType from "%types/rich-text";
import ImagePrismicType from "%types/image";
import SliceType from "%types/slice";

interface CaptionedPhonesSliceType extends SliceType {
  items: Array<{
    CarouselPhonesSliceType_Caption: RichTextPrismicType<
      | "paragraph"
      | "heading3"
      | "strong"
      | "em"
      | "hyperlink"
      | "list-item"
      | "o-list-item"
      | "o-list-item"
    >;
    CarouselPhonesSliceType_DeviceType: "SMARTPHONE" | "FEATURE_PHONE";
    CarouselPhonesSliceType_Image: ImagePrismicType;
  }>;
}

export default CaptionedPhonesSliceType;
