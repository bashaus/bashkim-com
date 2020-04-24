import RichTextPrismicType from '%prismic/types/rich-text';
import SliceType from '%prismic/types/slice';

interface FullTextSliceType extends SliceType {
  items: Array<any>;
  primary: {
    FullTextSliceType_Body: RichTextPrismicType<
    | 'paragraph'
    | 'preformatted'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'strong'
    | 'em'
    | 'hyperlink'
    | 'image'
    | 'embed'
    | 'list-item'
    | 'o-list-item'
    | 'o-list-item'
    >;
  };
}

export default FullTextSliceType;
