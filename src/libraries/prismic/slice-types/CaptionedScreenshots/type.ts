import ImagePrismicType from '%prismic/types/image';
import RichTextPrismicType from '%prismic/types/rich-text';
import SliceType from '%prismic/types/slice';

interface CaptionedScreenshotsSliceType extends SliceType {
  items: Array<{
    CaptionedScreenshotsSliceType_Images: ImagePrismicType;
  }>;
  primary: {
    CaptionedScreenshotsSliceType_Caption: RichTextPrismicType<
    | 'paragraph'
    | 'heading3'
    | 'strong'
    | 'em'
    | 'hyperlink'
    | 'list-item'
    | 'o-list-item'
    | 'o-list-item'
    >;
  };
}

export default CaptionedScreenshotsSliceType;
