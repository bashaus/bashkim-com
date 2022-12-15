import type { Case_StudyExhibitionsExhibitionslicetype } from "@bashkim-com/prismic-dal";
import { PrismicDate, PrismicRichText } from "@bashkim-com/prismic-helpers";

import { LifespanFormatter } from "../../formatters/LifespanFormatter/LifespanFormatter";
import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";

export type ExhibitionSliceProps = {
  slice: Case_StudyExhibitionsExhibitionslicetype;
};

export const ExhibitionSlice = ({ slice }: ExhibitionSliceProps) => {
  if (!slice.primary) {
    return null;
  }

  const {
    exhibition_slice_type_name: name,
    // exhibition_slice_type_link: link,
    exhibition_slice_type_opening_date: openingDate,
    exhibition_slice_type_closing_date: closingDate,
    exhibition_slice_type_location: location,
  } = slice.primary;

  return (
    <RichTextFormatter>
      <PrismicRichText render={name} />
      <PrismicRichText render={location} />
      <LifespanFormatter
        startDate={PrismicDate(openingDate ?? "")}
        endDate={closingDate ? PrismicDate(closingDate) : undefined}
      />
    </RichTextFormatter>
  );
};
