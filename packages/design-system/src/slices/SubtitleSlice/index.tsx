import type { SubtitleSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";

import SubtitlePartial from "../../partials/SubtitlePartial";

export type SubtitleSliceProps = {
  slice: SubtitleSliceTypeFragment;
};

export default function SubtitleSlice({ slice }: SubtitleSliceProps) {
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
}
