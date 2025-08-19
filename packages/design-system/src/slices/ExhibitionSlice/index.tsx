import RichTextFormatter from "@bashkim-com/design-system/RichTextFormatter";
import type { ExhibitionSliceTypeFragment } from "@bashkim-com/prismic-dal";

import LifespanFormatter from "../../formatters/LifespanFormatter";

export type ExhibitionSliceProps = Readonly<{
  slice: ExhibitionSliceTypeFragment;
}>;

export default function ExhibitionSlice({ slice }: ExhibitionSliceProps) {
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
    <>
      <RichTextFormatter field={name} />
      <RichTextFormatter field={location} />
      {!!openingDate && (
        <LifespanFormatter
          startDate={openingDate}
          endDate={closingDate ?? undefined}
        />
      )}
    </>
  );
}
