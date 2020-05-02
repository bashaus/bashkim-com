import LinkPrismicType from '%prismic/types/link';
import SlicePrismicType from '%prismic/types/slice';
import RichTextPrismicType, { RichTextTypePrismicItemType } from '%prismic/types/rich-text';

interface AccoladeSliceType extends SlicePrismicType {
  items: Array<{
    AccoladeSliceType_AwardPlace:
    | 'gold'
    | 'silver'
    | 'bronze'
    | 'honour'
    | 'shortlist';
    AccoladeSliceType_AwardLink: LinkPrismicType;
    AccoladeSliceType_AwardCategory: RichTextPrismicType<RichTextTypePrismicItemType.PARAGRAPH>;
  }>;
  primary: {
    AccoladeSliceType_Issuer?: RichTextPrismicType<RichTextTypePrismicItemType.HEADING3>;
    AccoladeSliceType_Description?: RichTextPrismicType<RichTextTypePrismicItemType.PARAGRAPH>;
    AccoladeSliceType_Date?: string;
  };
}

export default AccoladeSliceType;
