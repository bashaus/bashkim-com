import RichTextFormatter from "@bashkim-com/design-system/RichTextFormatter";
import type { SubtitleSliceTypeFragment } from "@bashkim-com/prismic-dal";

import SubtitlePartial from "../../partials/SubtitlePartial";

export type SubtitleSliceProps = Readonly<{
  slice: SubtitleSliceTypeFragment;
}>;

export default function SubtitleSlice({ slice }: SubtitleSliceProps) {
  if (!slice.primary) {
    return null;
  }

  const {
    subtitle_slice_type_heading: heading,
    subtitle_slice_type_description: description,
  } = slice.primary;

  return (
    <SubtitlePartial
      title={<RichTextFormatter field={heading} />}
      subtitle={<RichTextFormatter field={description} />}
    />
  );
}
