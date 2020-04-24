import LinkPrismicType from '%prismic/types/link';
import RichTextPrismicType from '%prismic/types/rich-text';
import SlicePrismicType from '%prismic/types/slice';

interface AccoladeSliceType extends SlicePrismicType {
  items: Array<{
    AccoladeSliceType_AwardPlace:
    | 'gold'
    | 'silver'
    | 'bronze'
    | 'honour'
    | 'shortlist';
    AccoladeSliceType_AwardLink: LinkPrismicType;
    AccoladeSliceType_AwardCategory: RichTextPrismicType<'paragraph'>;
  }>;
  primary: {
    AccoladeSliceType_Issuer?: RichTextPrismicType<'heading3'>;
    AccoladeSliceType_Description?: RichTextPrismicType<'paragraph'>;
    AccoladeSliceType_Date?: string;
  };
}

export default AccoladeSliceType;
