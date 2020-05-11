import { RichText } from "prismic-reactjs";
import React from "react";

import LinkResolver from "%prismic/helpers/LinkResolver";

import PartialFullText from "%components/PartialFullText";

import SlicePropType from "./type";

interface FullTextSliceTypeProps {
  slice: SlicePropType;
}

const FullTextSliceType = ({ slice }: FullTextSliceTypeProps): JSX.Element => {
  const { FullTextSliceType_Body: body } = slice.primary;

  return (
    <PartialFullText>
      {body && RichText.render(body, LinkResolver)}
    </PartialFullText>
  );
};

export default FullTextSliceType;
