import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicDateType } from "@bashkim-com/prismic/types/Date";
import type { PrismicLinkType } from "@bashkim-com/prismic/types/Link";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";

export type ExhibitionSliceType = PrismicSliceType & {
  primary: {
    exhibition_slice_type_name: Array<RichTextBlock>;
    exhibition_slice_type_link: PrismicLinkType;
    exhibition_slice_type_opening_date: PrismicDateType | null;
    exhibition_slice_type_closing_date: PrismicDateType | null;
    exhibition_slice_type_location: Array<RichTextBlock>;
  };
};
