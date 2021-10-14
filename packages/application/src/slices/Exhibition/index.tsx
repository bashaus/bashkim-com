import {
  FormattedLifespan,
  FormattedRichText,
} from "@bashkim-com/design-system";
import {
  PrismicDate,
  PrismicRichText,
  ExhibitionSliceType,
} from "@bashkim-com/prismic";

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
        <FormattedLifespan
          startDate={PrismicDate(openingDate)}
          endDate={PrismicDate(closingDate)}
        />
      </FormattedRichText>
    </li>
  );
};
