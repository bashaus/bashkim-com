import type { FullTextSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";

import FullTextPartial from "../../partials/FullTextPartial";

export type FullTextSliceProps = Readonly<{
  slice: FullTextSliceTypeFragment;
}>;

export default function FullTextSlice({ slice }: FullTextSliceProps) {
  if (!slice.primary) {
    return null;
  }

  const { full_text_slice_type_body: body } = slice.primary;

  return (
    <FullTextPartial>
      <PrismicRichText render={body} />
    </FullTextPartial>
  );
}
