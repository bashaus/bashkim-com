import ImagePrismicType from "%prismic/types/image";
import RichTextPrismicType from "%prismic/types/rich-text";
import SliceType from "%prismic/types/slice";

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
