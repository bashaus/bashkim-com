import { RichText } from "prismic-reactjs";
import type { SubtitleSliceType } from "@bashkim-com/prismic";

import PartialSubtitle from "%partials/Subtitle";

import LinkResolver from "%prismic/LinkResolver";

export type SubtitleSliceProps = {
  slice: SubtitleSliceType;
};

const SubtitleSlice = ({ slice }: SubtitleSliceProps): JSX.Element => {
  const {
    subtitle_slice_type_heading: heading,
    subtitle_slice_type_description: description,
  } = slice.primary;

  return (
    <PartialSubtitle>
      {heading && RichText.render(heading, LinkResolver)}
      {description && RichText.render(description, LinkResolver)}
    </PartialSubtitle>
  );
};

export default SubtitleSlice;
