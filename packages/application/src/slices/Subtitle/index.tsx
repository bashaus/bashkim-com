import { RichText } from "prismic-reactjs";
import React from "react";
import { SubtitleSliceType } from "@bashkim-com/prismic";

import PartialSubtitle from "%partials/Subtitle";

import LinkResolver from "%prismic/LinkResolver";

type SubtitleSliceProps = {
  slice: SubtitleSliceType;
};

const SubtitleSlice = ({ slice }: SubtitleSliceProps): JSX.Element => {
  const {
    SubtitleSliceType_Heading: heading,
    SubtitleSliceType_Description: description,
  } = slice.primary;

  return (
    <PartialSubtitle>
      {heading && RichText.render(heading, LinkResolver)}
      {description && RichText.render(description, LinkResolver)}
    </PartialSubtitle>
  );
};

export default SubtitleSlice;
