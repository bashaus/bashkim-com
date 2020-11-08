import { RichText } from "prismic-reactjs";
import React from "react";
import { FullTextSliceType } from "@bashkim-com/prismic";

import LinkResolver from "%prismic/LinkResolver";

import PartialFullText from "%partials/FullText";

type FullTextSliceProps = {
  slice: FullTextSliceType;
};

const FullTextSlice = ({ slice }: FullTextSliceProps): JSX.Element => {
  const { full_text_slice_type_body: body } = slice.primary;

  return (
    <PartialFullText>
      {body && RichText.render(body, LinkResolver)}
    </PartialFullText>
  );
};

export default FullTextSlice;
