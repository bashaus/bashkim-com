import LinkPrismicType from '%prismic/types/link';
import RichTextPrismicType from '%prismic/types/rich-text';
import SliceType from '%prismic/types/slice';

interface ExhibitionSliceType extends SliceType {
  items: Array<any>;
  primary: {
    ExhibitionSliceType_Name: RichTextPrismicType<'heading3'>;
    ExhibitionSliceType_Link: LinkPrismicType;
    ExhibitionSliceType_OpeningDate?: string;
    ExhibitionSliceType_ClosingDate?: string;
    ExhibitionSliceType_Location: RichTextPrismicType<'paragraph'>;
  };
}

export default ExhibitionSliceType;
