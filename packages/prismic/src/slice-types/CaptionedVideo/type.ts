import type { PrismicEmbedType } from "@bashkim-com/prismic/types/Embed";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";
import type {
  PrismicRichTextType,
  PrismicRichTextElement,
} from "@bashkim-com/prismic/types/RichText";

export type CaptionedVideoSliceType = PrismicSliceType & {
  primary: {
    captioned_video_slice_type_caption: PrismicRichTextType<
      | PrismicRichTextElement.PARAGRAPH
      | PrismicRichTextElement.HEADING3
      | PrismicRichTextElement.STRONG
      | PrismicRichTextElement.EM
      | PrismicRichTextElement.HYPERLINK
      | PrismicRichTextElement.LIST_ITEM
      | PrismicRichTextElement.O_LIST_ITEM
    > | null;
    captioned_video_slice_type_video: PrismicEmbedType | null;
  } | null;
};
