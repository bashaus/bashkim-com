import {
  ColorGreyscale100,
  MediaQueryMobile,
  MediaQueryNotMobile,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const MenuButton = styled.a`
  @media ${MediaQueryMobile} {
    display: block;
    width: 60px;
    height: 60px;
    line-height: 60px;

    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 60px;
    text-align: center;

    color: ${ColorGreyscale100};

    svg {
      display: inline-block;
      fill: currentColor;
      height: 60px;
    }
  }

  @media ${MediaQueryNotMobile} {
    display: none;
  }
`;
