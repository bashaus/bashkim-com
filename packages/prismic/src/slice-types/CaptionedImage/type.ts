import ImagePrismic from "%types/image";
import RichTextPrismic from "%types/rich-text";
import SlicePrismicType from "%types/slice";

interface CaptionedImageSliceType extends SlicePrismicType {
  items?: Array<{}>;
  primary: {
    captioned_image_slice_type_image: ImagePrismic;
    captioned_image_slice_type_caption: RichTextPrismic<
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

export default CaptionedImageSliceType;
