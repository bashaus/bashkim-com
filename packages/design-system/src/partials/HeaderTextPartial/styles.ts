import {
  ChevronDown,
  ColorGreyscale100,
  ColorWhite,
  GridCell,
  GridContainer,
  MediaQueryMobile,
  MediaQueryNotMobile,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const HeaderTextPartial = styled.header`
  ${ChevronDown()}

  position: relative;
  background-color: ${ColorGreyscale100};

  @media ${MediaQueryNotMobile} {
    padding-top: 61px;
  }
`;

export const Foreground = styled.div`
  ${GridContainer({ margin: [] })}

  color: ${ColorWhite};
  width: 100%;
  align-items: center;

  @media ${MediaQueryMobile} {
    padding-top: 80px;
    padding-bottom: 35px;
  }

  @media ${MediaQueryNotMobile} {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

export const Content = styled.div`
  ${GridCell({
    columns: {
      MobilePortrait: 12,
      MobileLandscape: 12,
      TabletPortrait: 10,
      TabletLandscape: 7,
      DesktopNarrow: 8,
      DesktopWide: 8,
    },
  })}

  position: relative;

  h1 {
    font-weight: bold;
  }

  @media ${MediaQueryMobile} {
    h1 {
      font-size: 12vw;
      line-height: 12vw;
    }

    p {
      font-size: 18px;
      line-height: 24px;
      margin-top: 10px;
    }
  }

  @media ${MediaQueryNotMobile} {
    padding-top: 61px;

    h1 {
      font-size: 80px;
      line-height: 100%;
    }

    p {
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      margin-top: 20px;
    }
  }
`;

export const Aside = styled.aside`
  ${GridCell({
    columns: {
      MobilePortrait: 12,
      MobileLandscape: 12,
      TabletPortrait: 12,
      TabletLandscape: 5,
      DesktopNarrow: 4,
      DesktopWide: 4,
    },
  })}
`;
