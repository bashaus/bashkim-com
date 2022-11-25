import { css } from "styled-components";

import { MediaQueryMobile, MediaQueryNotMobile } from "../media";
import { FontFamilyHeading } from "./font";

const HeadingPartial = () => css`
  font-family: ${FontFamilyHeading};
  font-weight: bold;
`;

export const Heading1 = () => css`
  ${HeadingPartial}

  @media ${MediaQueryMobile} {
    font-size: 32px;
    line-height: 125%;
  }

  @media ${MediaQueryNotMobile} {
    font-size: 46px;
    line-height: 125%;
  }
`;

export const Heading2 = () => css`
  ${HeadingPartial}

  @media ${MediaQueryMobile} {
    font-size: 22px;
    line-height: 125%;
    letter-spacing: -0.5px;

    &:not(:first-child) {
      margin-top: 1.2em;
    }
  }

  @media ${MediaQueryNotMobile} {
    font-size: 30px;
    line-height: 120%;

    &:not(:first-child) {
      margin-top: 1.2em;
    }
  }
`;

export const Heading3 = () => css`
  ${HeadingPartial}

  @media ${MediaQueryMobile} {
    font-size: 18px;
    line-height: 130%;

    &:not(:first-child) {
      margin-top: 1.23em;
    }
  }

  @media ${MediaQueryNotMobile} {
    font-size: 22px;
    line-height: 130%;
    letter-spacing: -1px;

    &:not(:first-child) {
      margin-top: 1.72em;
    }
  }
`;
