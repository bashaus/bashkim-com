import type { FullTextSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";

import { FullTextPartial } from "../../partials/FullTextPartial/FullTextPartial";

export type FullTextSliceProps = {
  slice: FullTextSliceTypeFragment;
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
