import { PartialSubtitle } from "@bashkim-com/design-system";
import type { SubtitleSliceType } from "@bashkim-com/prismic";

import { PrismicRichText } from "%libraries/prismic/helpers/RichText";

export type SubtitleSliceProps = {
  slice: SubtitleSliceType;
};

export const SubtitleSlice = ({ slice }: SubtitleSliceProps): JSX.Element => {
  const {
    subtitle_slice_type_heading: heading,
    subtitle_slice_type_description: description,
  } = slice.primary;

  return (
    <PartialSubtitle>
      <PrismicRichText render={heading} />
      <PrismicRichText render={description} />
    </PartialSubtitle>
  );
};

export default SubtitleSlice;
