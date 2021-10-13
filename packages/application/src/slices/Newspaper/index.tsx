import {
  FormattedRichText,
  PartialNewspaper,
} from "@bashkim-com/design-system";
import { PrismicRichText, NewspaperSliceType } from "@bashkim-com/prismic";

export type NewspaperSliceProps = {
  slice: NewspaperSliceType;
};

export const NewspaperSlice = ({ slice }: NewspaperSliceProps): JSX.Element => (
  <PartialNewspaper>
    {slice.fields.map((field, i) => {
      const { newspaper_slice_type_group: group } = field;
      return (
        <FormattedRichText key={i}>
          <PrismicRichText render={group} />
        </FormattedRichText>
      );
    })}
  </PartialNewspaper>
);

export default NewspaperSlice;
