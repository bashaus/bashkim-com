import type { PrismicImageType } from "@bashkim-com/prismic/types/Image";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";
import type {
  PrismicRichTextType,
  PrismicRichTextElement,
} from "@bashkim-com/prismic/types/RichText";

export enum CarouselPhonesSliceTypeDeviceType {
  SMARTPHONE = "SMARTPHONE",
  FEATURE_PHONE = "FEATURE_PHONE",
}

export type CarouselPhonesSliceType = PrismicSliceType & {
  fields: Array<{
    carousel_phones_slice_type_caption: PrismicRichTextType<
      | PrismicRichTextElement.PARAGRAPH
      | PrismicRichTextElement.HEADING3
      | PrismicRichTextElement.STRONG
      | PrismicRichTextElement.EM
      | PrismicRichTextElement.HYPERLINK
      | PrismicRichTextElement.LIST_ITEM
      | PrismicRichTextElement.O_LIST_ITEM
    > | null;
    carousel_phones_slice_type_device_type: CarouselPhonesSliceTypeDeviceType | null;
    carousel_phones_slice_type_image: PrismicImageType | null;
  }> | null;
};
