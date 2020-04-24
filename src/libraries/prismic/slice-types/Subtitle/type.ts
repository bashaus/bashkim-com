import RichTextPrismicType from '%prismic/types/rich-text';
import SliceType from '%prismic/types/slice';

interface SubtitleSliceType extends SliceType {
  items: Array<any>;
  primary: {
    SubtitleSliceType_Heading: RichTextPrismicType<'heading2'>;
    SubtitleSliceType_Description: RichTextPrismicType<'paragraph'>;
  };
}

export default SubtitleSliceType;
