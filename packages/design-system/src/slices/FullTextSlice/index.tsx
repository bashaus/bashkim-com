import RichTextFormatter from "@bashkim-com/design-system/RichTextFormatter";
import type { FullTextSliceTypeFragment } from "@bashkim-com/prismic-dal";

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
      <RichTextFormatter field={body} />
    </FullTextPartial>
  );
}
