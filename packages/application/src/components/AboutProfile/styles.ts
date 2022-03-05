import { RichTextFormatter } from "@bashkim-com/design-system";
import {
  GridCell,
  GridContainer,
  MediaQueryMobilePortrait,
  MediaQueryNotMobilePortrait,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const Principles = styled.ul`
  ${GridContainer()};
`;

export const Principle = styled.li`
  ${GridCell({
    columns: {
      MobilePortrait: 12,
      MobileLandscape: 6,
      TabletPortrait: 3,
      TabletLandscape: 3,
      DesktopNarrow: 3,
      DesktopWide: 3,
    },
  })}

  svg {
    width: 50px;
    height: 50px;
  }

  @media ${MediaQueryMobilePortrait} {
    position: relative;
    padding-top: 15px;
    padding-left: 85px;
    padding-bottom: 15px;

    svg {
      position: absolute;
      top: 10px;
      left: 10px;
      order: 1;
      margin-top: 0;
    }

    h3 {
      order: 2;
    }

    p {
      order: 3;
    }
  }

  @media ${MediaQueryNotMobilePortrait} {
    svg {
      order: 1;
      display: block;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
      fill: currentColor;
    }

    h3 {
      order: 2;
      text-align: center;
    }

    p {
      order: 3;
    }
  }
`;

export const Cell = styled(RichTextFormatter)`
  display: flex;
  flex-direction: column;
`;
