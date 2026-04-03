import RichTextFormatter from "@bashkim-com/design-system/RichTextFormatter";
import { SubtitleSliceTypeFragment } from "@bashkim-com/prismic-dal";

import SubtitlePartial from "../../partials/SubtitlePartial";

export type SubtitleSliceProps = Readonly<{
  slice: SubtitleSliceTypeFragment;
}>;

export default function SubtitleSlice({ slice }: SubtitleSliceProps) {
  const { primary } = slice;
  if (!primary) {
    return null;
  }

  const {
    subtitle_slice_type_heading: heading,
    subtitle_slice_type_description: description,
  } = primary;

  return (
    <SubtitlePartial
      title={<RichTextFormatter field={heading} />}
      subtitle={<RichTextFormatter field={description} />}
    />
  );
}
