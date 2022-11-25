import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MediaQueryMobile,
  MediaQueryNotMobile,
} from "@bashkim-com/style-guide";
import styled, { css } from "styled-components";

type SplitPartialProps = {
  "props-index": number;
};

export const SplitPartial = styled.div<SplitPartialProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ "props-index": index }) => {
    if (index % 2 === 1) {
      return css`
        flex-direction: row-reverse;
      `;
    }
  }}

  @media ${MediaQueryMobile} {
    .SplitPartial_chevron {
      ${ChevronDown()}
    }
  }

  @media ${MediaQueryNotMobile} {
    .SplitPartial_chevron {
      ${({ "props-index": index }) => {
        return index % 2 === 1 ? ChevronLeft() : ChevronRight();
      }}
    }
  }
`;
