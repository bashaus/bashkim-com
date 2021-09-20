import { FormattedRichText } from "@bashkim-com/design-system";
import type { ExhibitionSliceType } from "@bashkim-com/prismic";

import { CaseStudyLifespan } from "%components/CaseStudyLifespan/index";

import { PrismicRichText } from "%libraries/prismic/helpers/RichText";

export type ExhibitionSliceProps = {
  slice: ExhibitionSliceType;
};

export const ExhibitionSlice = ({
  slice,
}: ExhibitionSliceProps): JSX.Element => {
  const {
    exhibition_slice_type_name: name,
    // exhibition_slice_type_link: link,
    exhibition_slice_type_opening_date: openingDate,
    exhibition_slice_type_closing_date: closingDate,
    exhibition_slice_type_location: location,
  } = slice.primary;

  return (
    <li>
      <FormattedRichText>
        <PrismicRichText render={name} />
        <PrismicRichText render={location} />
        <CaseStudyLifespan
          launched={openingDate}
          decommissioned={closingDate}
        />
      </FormattedRichText>
    </li>
  );
};
