import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";
import type {
  PrismicRichTextType,
  PrismicRichTextElement,
} from "@bashkim-com/prismic/types/RichText";

export type NewspaperSliceType = PrismicSliceType & {
  fields: Array<{
    newspaper_slice_type_group: PrismicRichTextType<
      | PrismicRichTextElement.PARAGRAPH
      | PrismicRichTextElement.HEADING3
      | PrismicRichTextElement.STRONG
      | PrismicRichTextElement.EM
      | PrismicRichTextElement.HYPERLINK
      | PrismicRichTextElement.LIST_ITEM
      | PrismicRichTextElement.O_LIST_ITEM
    > | null;
  }> | null;
};
