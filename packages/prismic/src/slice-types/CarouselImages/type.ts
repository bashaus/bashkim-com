import type RichTextPrismicType from "@bashkim-com/prismic/types/rich-text";
import type ImagePrismicType from "@bashkim-com/prismic/types/image";
import type SliceType from "@bashkim-com/prismic/types/slice";

type CaptionedImagesSliceType = SliceType & {
  items: Array<{
    carousel_images_slice_type_caption: RichTextPrismicType<
      | "paragraph"
      | "heading3"
      | "strong"
      | "em"
      | "hyperlink"
      | "list-item"
      | "o-list-item"
      | "o-list-item"
    >;
    carousel_images_slice_type_image: ImagePrismicType;
  }>;
};

export default CaptionedImagesSliceType;
