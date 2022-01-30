import {
  ColorGreyscale100,
  MediaQueryScreenLarge,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const Footer = styled.footer`
  @media ${MediaQueryScreenLarge} {
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 3em;
      background-color: ${ColorGreyscale100};
    }
  }
`;
