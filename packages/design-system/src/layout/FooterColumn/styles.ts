import {
  ColorGreyscale100,
  ColorGreyscale150,
  ColorWhite,
  GridFullPadding,
  MediaQueryScreenLarge,
  MediaQueryScreenSmall,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const FooterColumn = styled.div`
  position: relative;

  @media ${MediaQueryScreenLarge} {
    width: 200px;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const Label = styled.div.attrs({
  role: "menuitem",
})`
  ${GridFullPadding({
    breakpoints: ["MobilePortrait", "MobileLandscape", "TabletPortrait"],
  })}

  display: block;
  line-height: 3em;
  background-color: ${ColorGreyscale100};
  color: ${ColorWhite};
  text-transform: uppercase;

  @media ${MediaQueryScreenSmall} {
    position: relative;
    padding-top: 1px;
    padding-bottom: 0;

    /* Line */
    &::before {
      content: "";
      display: block;
      position: absolute;
      background-color: ${ColorWhite};
      left: 14px;
      right: 14px;
      bottom: -1px;
      height: 1px;
      z-index: 1;
    }

    /* Expand/collapse icon */
    &::after {
      content: "▽";
      position: absolute;
      top: 50%;
      right: 1em;
      width: 1.5em;
      height: 3em;
      text-align: center;
      transform: translateY(-50%);
      line-height: 3em;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    ${FooterColumn}[aria-expanded="true"] &::after {
      transform: translateY(-50%) rotate(180deg);
    }
  }

  @media ${MediaQueryScreenLarge} {
    cursor: inherit;

    ${FooterColumn}:nth-last-child(n + 2) &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      height: 1em;
      width: 1px;
      right: 10px;
      background-color: ${ColorWhite};
      margin-top: 1em;
      z-index: 1;
    }
  }
`;

export const Content = styled.div`
  ${GridFullPadding({
    breakpoints: ["MobilePortrait", "MobileLandscape", "TabletPortrait"],
  })}

  padding-top: 0.5em;
  padding-bottom: 0.5em;

  @media ${MediaQueryScreenSmall} {
    display: none;

    ${FooterColumn}[aria-expanded="true"] & {
      display: block;
    }
  }

  @media ${MediaQueryScreenLarge} {
    a {
      line-height: 1.5em;
      padding-top: 0.25em;
      padding-bottom: 0.25em;
      transition: color 0.3s ease-in-out;
    }

    a:hover {
      color: ${ColorGreyscale150};
    }
  }
`;
