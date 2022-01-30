import {
  ColorGreyscale20,
  ColorGreyscale100,
  ColorWhite,
  GridContainerBounds,
  MediaQueryNotMobile,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

import { zIndex } from "%styleguide/utils/z-index";

export const Header = styled.header`
  position: relative;
  z-index: ${zIndex("Header")};
  border-bottom: solid 1px ${ColorGreyscale20};
  background-color: ${ColorWhite};
  box-shadow: 0 10px 20px -15px rgba(30, 30, 30, 0.75);

  @media ${MediaQueryNotMobile} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 61px;
    text-shadow: 0 0 0 rgba(48, 48, 48, 0);

    &::before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      bottom: -5px;
      right: -5px;
      filter: blur(5px);
      transition: background-color 0.3s;
      background-color: transparent;
    }

    &[data-context-navigation-scroll-at-top="true"] {
      background-color: transparent;
      border-bottom-color: transparent;
      color: ${ColorWhite};
    }

    &:not([data-context-navigation-scroll-at-top="true"]) {
      color: ${ColorGreyscale100};
    }

    &[data-context-navigation-scroll-at-top="true"]::before {
      background-color: rgba(100, 100, 100, 0.2);
    }

    html.isReady & {
      transition-property: background-color, box-shadow, color;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
    }
  }
`;

export const Container = styled.div`
  @media ${MediaQueryNotMobile} {
    display: flex;
    flex-direction: row;
  }

  ${GridContainerBounds({
    breakpoints: [
      "TabletPortrait",
      "TabletLandscape",
      "DesktopNarrow",
      "DesktopWide",
    ],
    margin: [],
  })}
`;
