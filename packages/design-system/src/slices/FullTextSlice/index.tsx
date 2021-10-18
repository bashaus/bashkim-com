import { PrismicRichText, FullTextSliceType } from "@bashkim-com/prismic";

import { FullTextPartial } from "../../partials/FullTextPartial";

export type FullTextSliceProps = {
  slice: FullTextSliceType;
};

export const FullTextSlice = ({
  slice,
}: FullTextSliceProps): JSX.Element | null => {
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
