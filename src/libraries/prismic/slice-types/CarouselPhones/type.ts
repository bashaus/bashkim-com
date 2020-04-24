import RichTextPrismicType from '%prismic/types/rich-text';
import ImagePrismicType from '%prismic/types/image';
import SliceType from '%prismic/types/slice';

export const DeviceTypes = {
  SMARTPHONE: 'SMARTPHONE',
  FEATURE_PHONE: 'FEATURE_PHONE',
};

interface CaptionedPhonesSliceType extends SliceType {
  items: Array<{
    CarouselPhonesSliceType_Caption: RichTextPrismicType<
    | 'paragraph'
    | 'heading3'
    | 'strong'
    | 'em'
    | 'hyperlink'
    | 'list-item'
    | 'o-list-item'
    | 'o-list-item'
    >;
    CarouselPhonesSliceType_DeviceType: 'SMARTPHONE' | 'FEATURE_PHONE';
    CarouselPhonesSliceType_Image: ImagePrismicType;
  }>;
}

export default CaptionedPhonesSliceType;
