import type { SubtitleSliceType } from "@bashkim-com/prismic";

import { PartialSubtitle } from "%partials/Subtitle";

import { PrismicRichText } from "%prismic/helpers/RichText";

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
