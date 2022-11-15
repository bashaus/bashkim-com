import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import type { Case_StudyBodyFulltextslicetype } from "@bashkim-com/prismic-types";

import { FullTextPartial } from "../../partials/FullTextPartial";

export type FullTextSliceProps = {
  slice: Case_StudyBodyFulltextslicetype;
};

export const FullTextSlice = ({ slice }: FullTextSliceProps) => {
  if (!slice.primary) {
    return null;
  }

  const { full_text_slice_type_body: body } = slice.primary;

  return (
    <FullTextPartial>
      <PrismicRichText render={body} />
    </FullTextPartial>
  );
};

export default FullTextSlice;
