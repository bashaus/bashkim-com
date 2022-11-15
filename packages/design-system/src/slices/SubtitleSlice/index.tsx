import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import type { Case_StudyBodySubtitleslicetype } from "@bashkim-com/prismic-types";

import { SubtitlePartial } from "../../partials/SubtitlePartial";

export type SubtitleSliceProps = {
  slice: Case_StudyBodySubtitleslicetype;
};

export const SubtitleSlice = ({ slice }: SubtitleSliceProps) => {
  if (!slice.primary) {
    return null;
  }
  const {
    subtitle_slice_type_heading: heading,
    subtitle_slice_type_description: description,
  } = slice.primary;

  return (
    <SubtitlePartial>
      <PrismicRichText render={heading} />
      <PrismicRichText render={description} />
    </SubtitlePartial>
  );
};

export default SubtitleSlice;
