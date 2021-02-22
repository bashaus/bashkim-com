import ImagePrismic from "@bashkim-com/prismic/types/image";
import RichTextPrismic from "@bashkim-com/prismic/types/rich-text";
import SlicePrismicType from "@bashkim-com/prismic/types/slice";

type CaptionedImageSliceType = SlicePrismicType & {
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
};

export default CaptionedImageSliceType;
