import RichTextPrismicType from "%prismic/types/rich-text";
import ImagePrismicType from "%prismic/types/image";
import SliceType from "%prismic/types/slice";

interface CaptionedImagesSliceType extends SliceType {
  items: Array<{
    CarouselImagesSliceType_Caption: RichTextPrismicType<
      | "paragraph"
      | "heading3"
      | "strong"
      | "em"
      | "hyperlink"
      | "list-item"
      | "o-list-item"
      | "o-list-item"
    >;
    CarouselImagesSliceType_Image: ImagePrismicType;
  }>;
}

export default CaptionedImagesSliceType;
