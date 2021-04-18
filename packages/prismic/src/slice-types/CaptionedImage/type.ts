import type { PrismicImageType } from "@bashkim-com/prismic/types/Image";
import type {
  PrismicRichTextType,
  PrismicRichTextElement,
} from "@bashkim-com/prismic/types/RichText";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";

export type CaptionedImageSliceType = PrismicSliceType & {
  primary: {
    captioned_image_slice_type_image: PrismicImageType | null;
    captioned_image_slice_type_caption: PrismicRichTextType<
      | PrismicRichTextElement.PARAGRAPH
      | PrismicRichTextElement.HEADING3
      | PrismicRichTextElement.STRONG
      | PrismicRichTextElement.EM
      | PrismicRichTextElement.HYPERLINK
      | PrismicRichTextElement.LIST_ITEM
      | PrismicRichTextElement.O_LIST_ITEM
    > | null;
    captioned_image_slice_type_image_blurhash: string | null;
  } | null;
};
