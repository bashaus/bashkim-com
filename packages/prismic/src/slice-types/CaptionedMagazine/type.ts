import ImagePrismicType from "%types/image";
import RichTextPrismicType from "%types/rich-text";
import SliceType from "%types/slice";

interface CaptionedMagazineSliceType extends SliceType {
  items: Array<{
    CaptionedMagazineSliceType_Images: ImagePrismicType;
  }>;
  primary: {
    CaptionedMagazineSliceType_Caption: RichTextPrismicType<
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
