import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import type { Case_StudyBodyNewspaperslicetype } from "@bashkim-com/prismic-types";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import { NewspaperPartial } from "../../partials/NewspaperPartial";

export type NewspaperSliceProps = {
  slice: Case_StudyBodyNewspaperslicetype;
};

export const NewspaperSlice = ({ slice }: NewspaperSliceProps) => (
  <NewspaperPartial>
    {slice.fields?.map((field, i) => {
      const { newspaper_slice_type_group: group } = field;
      return (
        <RichTextFormatter key={i}>
          <PrismicRichText render={group} />
        </RichTextFormatter>
      );
    })}
  </NewspaperPartial>
);

export default NewspaperSlice;
