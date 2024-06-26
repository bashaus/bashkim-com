import type { NewspaperSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import { NewspaperPartial } from "../../partials/NewspaperPartial";

export type NewspaperSliceProps = {
  slice: NewspaperSliceTypeFragment;
};

export const NewspaperSlice = ({ slice }: NewspaperSliceProps) => (
  <NewspaperPartial>
    {slice.fields?.map((field) => {
      const { newspaper_slice_type_group: group } = field;
      return (
        <RichTextFormatter key={JSON.stringify(group)}>
          <PrismicRichText render={group} />
        </RichTextFormatter>
      );
    })}
  </NewspaperPartial>
);

export default NewspaperSlice;
