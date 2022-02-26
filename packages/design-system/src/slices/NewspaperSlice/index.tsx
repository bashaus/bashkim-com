import { NewspaperSliceType, PrismicRichText } from "@bashkim-com/prismic";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import { NewspaperPartial } from "../../partials/NewspaperPartial";

export type NewspaperSliceProps = {
  slice: NewspaperSliceType;
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
