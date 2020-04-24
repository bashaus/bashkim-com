import ImagePrismic from '%prismic/types/image';
import RichTextPrismic from '%prismic/types/rich-text';
import SlicePrismicType from '%prismic/types/slice';

interface CaptionedImageSliceType extends SlicePrismicType {
  items?: Array<{}>;
  primary: {
    CaptionedImageSliceType_Image: ImagePrismic;
    CaptionedImageSliceType_Caption: RichTextPrismic<
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

export default CaptionedImageSliceType;
