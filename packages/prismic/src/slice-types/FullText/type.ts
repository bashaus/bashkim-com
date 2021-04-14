import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";
import type {
  PrismicRichTextType,
  PrismicRichTextElement,
} from "@bashkim-com/prismic/types/RichText";

export type FullTextSliceType = PrismicSliceType & {
  primary: {
    full_text_slice_type_body: PrismicRichTextType<
      PrismicRichTextElement
    > | null;
  } | null;
};
