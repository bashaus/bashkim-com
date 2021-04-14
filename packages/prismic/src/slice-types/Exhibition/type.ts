import type { PrismicDate } from "@bashkim-com/prismic/types/Date";
import type { PrismicLinkType } from "@bashkim-com/prismic/types/Link";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";
import type {
  PrismicRichTextType,
  PrismicRichTextElement,
} from "@bashkim-com/prismic/types/RichText";

export type ExhibitionSliceType = PrismicSliceType & {
  primary: {
    exhibition_slice_type_name: PrismicRichTextType<
      PrismicRichTextElement.HEADING3
    >;
    exhibition_slice_type_link: PrismicLinkType;
    exhibition_slice_type_opening_date: PrismicDate | null;
    exhibition_slice_type_closing_date: PrismicDate | null;
    exhibition_slice_type_location: PrismicRichTextType<
      PrismicRichTextElement.PARAGRAPH
    >;
  };
};
