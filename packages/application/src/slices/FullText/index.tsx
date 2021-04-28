import { PartialFullText } from "@bashkim-com/design-system";
import type { FullTextSliceType } from "@bashkim-com/prismic";

import { PrismicRichText } from "%libraries/prismic/helpers/RichText";

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
