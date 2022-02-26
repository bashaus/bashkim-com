import {
  ExhibitionSliceType,
  PrismicDate,
  PrismicRichText,
} from "@bashkim-com/prismic";

import { LifespanFormatter } from "../../formatters/LifespanFormatter";
import { RichTextFormatter } from "../../formatters/RichTextFormatter";

export type ExhibitionSliceProps = {
  slice: ExhibitionSliceType;
};

export const ExhibitionSlice = ({ slice }: ExhibitionSliceProps) => {
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
