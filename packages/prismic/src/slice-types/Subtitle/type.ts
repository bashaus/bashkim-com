import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";
import type {
  PrismicRichTextType,
  PrismicRichTextElement,
} from "@bashkim-com/prismic/types/RichText";

export type SubtitleSliceType = PrismicSliceType & {
  primary: {
    subtitle_slice_type_heading: PrismicRichTextType<
      PrismicRichTextElement.HEADING2
    > | null;
    subtitle_slice_type_description: PrismicRichTextType<
      PrismicRichTextElement.PARAGRAPH
    > | null;
  } | null;
};
