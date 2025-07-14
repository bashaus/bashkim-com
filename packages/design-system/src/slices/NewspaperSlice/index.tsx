import type { NewspaperSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";

import NewspaperPartial from "../../partials/NewspaperPartial";

export type NewspaperSliceProps = Readonly<{
  slice: NewspaperSliceTypeFragment;
}>;

export default function NewspaperSlice({ slice }: NewspaperSliceProps) {
  return (
    <NewspaperPartial>
      {slice.fields?.map((field) => {
        const { newspaper_slice_type_group: group } = field;
        return <PrismicRichText render={group} key={JSON.stringify(group)} />;
      })}
    </NewspaperPartial>
  );
}
