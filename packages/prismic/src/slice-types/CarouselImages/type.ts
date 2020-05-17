import RichTextPrismicType from "%types/rich-text";
import ImagePrismicType from "%types/image";
import SliceType from "%types/slice";

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
