import type { PrismicImageType } from "@bashkim-com/prismic/types/Image";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";
import type {
  PrismicRichTextType,
  PrismicRichTextElement,
} from "@bashkim-com/prismic/types/RichText";

export type CarouselImagesSliceType = PrismicSliceType & {
  fields: Array<{
    carousel_images_slice_type_caption: PrismicRichTextType<
      | PrismicRichTextElement.PARAGRAPH
      | PrismicRichTextElement.HEADING3
      | PrismicRichTextElement.STRONG
      | PrismicRichTextElement.EM
      | PrismicRichTextElement.HYPERLINK
      | PrismicRichTextElement.LIST_ITEM
      | PrismicRichTextElement.O_LIST_ITEM
    > | null;
    carousel_images_slice_type_image: PrismicImageType | null;
  }> | null;
};
