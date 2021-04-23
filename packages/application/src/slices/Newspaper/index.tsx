import type { NewspaperSliceType } from "@bashkim-com/prismic";

import PartialNewspaper from "%partials/Newspaper";

import { PrismicRichText } from "%prismic/helpers/RichText";

export type NewspaperSliceProps = {
  slice: NewspaperSliceType;
};

const NewspaperSlice = ({ slice }: NewspaperSliceProps): JSX.Element => (
  <PartialNewspaper>
    {slice.fields.map((field, i) => {
      const { newspaper_slice_type_group: group } = field;
      return (
        <div key={i}>
          <PrismicRichText render={group} />
        </div>
      );
    })}
  </PartialNewspaper>
);

export default NewspaperSlice;
