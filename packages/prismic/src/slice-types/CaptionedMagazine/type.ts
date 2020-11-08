import ImagePrismicType from "%types/image";
import RichTextPrismicType from "%types/rich-text";
import SliceType from "%types/slice";

interface CaptionedMagazineSliceType extends SliceType {
  items: Array<{
    captioned_magazine_slice_type_images: ImagePrismicType;
  }>;
  primary: {
    captioned_magazine_slice_type_caption: RichTextPrismicType<
      | "paragraph"
      | "heading3"
      | "strong"
      | "em"
      | "hyperlink"
      | "list-item"
      | "o-list-item"
      | "o-list-item"
    >;
  };
}

export default CaptionedMagazineSliceType;
