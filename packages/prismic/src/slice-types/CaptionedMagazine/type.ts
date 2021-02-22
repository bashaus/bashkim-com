import ImagePrismicType from "@bashkim-com/prismic/types/image";
import RichTextPrismicType from "@bashkim-com/prismic/types/rich-text";
import SliceType from "@bashkim-com/prismic/types/slice";

type CaptionedMagazineSliceType = SliceType & {
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
};

export default CaptionedMagazineSliceType;
