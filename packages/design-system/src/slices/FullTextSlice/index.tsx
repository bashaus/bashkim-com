import RichTextFormatter from "@bashkim-com/design-system/RichTextFormatter";
import { FullTextSliceTypeFragment } from "@bashkim-com/prismic-dal";

import FullTextPartial from "../../partials/FullTextPartial";

export type FullTextSliceProps = Readonly<{
  slice: FullTextSliceTypeFragment;
}>;

export default function FullTextSlice({ slice }: FullTextSliceProps) {
  const { primary } = slice;
  if (!primary) {
    return null;
  }

  const { full_text_slice_type_body: body } = primary;

  return (
    <FullTextPartial>
      <RichTextFormatter field={body} />
    </FullTextPartial>
  );
}
