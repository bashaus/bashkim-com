import EmbedPrismicType from '%prismic/types/embed';
import ImagePrismicType from '%prismic/types/image';
import RichTextPrismicType from '%prismic/types/rich-text';
import SliceType from '%prismic/types/slice';

interface GridVideoSliceType extends SliceType {
  items: Array<{
    GridVideoSliceType_Video: EmbedPrismicType;
    GridVideoSliceType_Poster: ImagePrismicType;
    GridVideoSliceType_Description: RichTextPrismicType<'paragraph'>;
  }>;
  primary: {};
}

export default GridVideoSliceType;
