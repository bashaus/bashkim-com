import type { FullTextSliceType } from "@bashkim-com/prismic";

import { PrismicRichText } from "%prismic/helpers/RichText";

import { PartialFullText } from "%partials/FullText";

export type FullTextSliceProps = {
  slice: FullTextSliceType;
};

export const FullTextSlice = ({ slice }: FullTextSliceProps): JSX.Element => {
  const { full_text_slice_type_body: body } = slice.primary;

  return (
    <PartialFullText>
      <PrismicRichText render={body} />
    </PartialFullText>
  );
};

export default FullTextSlice;
